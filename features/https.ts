import axios from 'axios';
// @ts-ignore
import { AxiosInstance, AxiosError } from 'axios';
import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { API_BASE_URL } from '../../torax-app/.env';

// API 기본 URL 설정

// API 응답 타입 정의
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// 비디오 정보 타입
interface VideoInfo {
  id: string;
  title: string;
  uploader: string;
  duration: number;
  thumbnail: string;
  view_count: number;
  url: string;
}

// 검색 결과 타입
interface SearchResult {
  videos: VideoInfo[];
  nextPageToken?: string;
}

// API 클라이언트 클래스
class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 30000, // 30초 타임아웃
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    // 요청 인터셉터
    this.client.interceptors.request.use(
      (config: any) => {
        // 요청 전에 토큰이 있다면 헤더에 추가하는 로직
        // const token = getTokenFromStorage();
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    // 응답 인터셉터
    this.client.interceptors.response.use(
      (response: any) => response,
      (error: AxiosError) => {
        // 에러 처리 로직
        if (error.response) {
          // 서버에서 에러 응답이 온 경우
          console.error('API Error:', error.response.data);
        } else if (error.request) {
          // 요청이 전송되었지만 응답을 받지 못한 경우
          console.error('No response received:', error.request);
        } else {
          // 요청 설정 중에 에러가 발생한 경우
          console.error('Request setup error:', error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  // 비디오 정보 가져오기
  async getVideoInfo(url: string): Promise<ApiResponse<VideoInfo>> {
    try {
      const response = await this.client.post<ApiResponse<VideoInfo>>('/video/info', { url });
      return response.data;
    } catch (error) {
      return this.handleError<VideoInfo>(error, 'Failed to fetch video info');
    }
  }

  // 오디오 다운로드
  async downloadAudio(url: string, onProgress?: (progress: number) => void, filename: string = 'audio.mp3'): Promise<string> {
    try {
      // 다운로드 디렉토리 경로 설정
      // @ts-ignore
      const downloadDir = `${FileSystem.documentDirectory}downloads/`;
      
      // 디렉토리가 없으면 생성
      const dirInfo = await FileSystem.getInfoAsync(downloadDir);
      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(downloadDir, { intermediates: true });
      }

      // 파일 경로 설정
      const fileUri = downloadDir + filename;
      
      // 파일이 이미 존재하는지 확인
      const fileInfo = await FileSystem.getInfoAsync(fileUri);
      if (fileInfo.exists) {
        // 파일이 이미 존재하면 기존 파일 삭제 (선택사항)
        await FileSystem.deleteAsync(fileUri);
      }

      // 다운로드 시작
      const downloadResumable = FileSystem.createDownloadResumable(
        `${API_BASE_URL}/download?url=${encodeURIComponent(url)}`,
        fileUri,
        {},
        (downloadProgress) => {
          const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
          onProgress?.(progress);
        }
      );

      const { uri } = await downloadResumable.downloadAsync();
      return uri;
    } catch (error) {
      console.error('Download error:', error);
      throw new Error('Failed to download audio');
    }
  }

  // 비디오 검색
  async searchVideos(query: string, maxResults: number = 10): Promise<ApiResponse<SearchResult>> {
    try {
      const response = await this.client.get<ApiResponse<SearchResult>>('/search', {
        params: { q: query, max_results: maxResults }
      });
      return response.data;
    } catch (error) {
      return this.handleError<SearchResult>(error, 'Failed to search videos');
    }
  }

  // API 상태 확인
  async checkHealth(): Promise<ApiResponse<{ status: string }>> {
    try {
      const response = await this.client.get<ApiResponse<{ status: string }>>('/');
      return response.data;
    } catch (error) {
      return this.handleError<{ status: string }>(error, 'Failed to check API health');
    }
  }

  // 에러 처리 헬퍼
  private handleError<T>(error: any, defaultMessage: string): ApiResponse<T> {
    // @ts-ignore
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error: error.response?.data?.error || error.message || defaultMessage
      };
    }
    return {
      success: false,
      error: defaultMessage
    };
  }
}

// 싱글톤 인스턴스 생성
export const apiClient = new ApiClient();

// 타입 익스포트
export type { VideoInfo, SearchResult, ApiResponse };