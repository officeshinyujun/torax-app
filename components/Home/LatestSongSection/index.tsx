import SectionDefault from "@/components/general/SectionDefault";
import MusicCard from "./musicCard";


export default function LatestSongSection() {

    const latestSong = {
        title : "지미 헨드릭스 - 바라바라바라밤",
        artist : "지미 헨드릭스",
        imgUrl : require("@/assets/images/jim.jpg")
    }

    return (
        <SectionDefault
            title="최근 들은 곡"
            width="100%"
            height="auto"
        >
            <MusicCard
                title={latestSong.title}
                artist={latestSong.artist}
                imgUrl={latestSong.imgUrl}
            />
        </SectionDefault>
    )
}