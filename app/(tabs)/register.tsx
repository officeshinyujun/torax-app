import CustomView from '@/components/general/CustomView';
import { Image } from 'react-native';

export default function Register() {
    return (
        <CustomView
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
        >
            <Image
                source={require('@/assets/images/torax-logo.png')}
                style={{ width: 72, height: 38 }}
            />
        </CustomView>
    )
}