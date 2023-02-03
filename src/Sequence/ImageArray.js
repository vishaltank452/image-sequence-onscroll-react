import {AirPods} from "../images";
import {useImage} from "../hooks"

const AirpodsArray = () => {
    const [AA0, AA0S] = useImage(AirPods[0]);
    const [AA1, AA1S] = useImage(AirPods[1]);
    const [AA2, AA2S] = useImage(AirPods[2]);
    const [AA3, AA3S] = useImage(AirPods[3]);
    const [AA4, AA4S] = useImage(AirPods[4]);

<h1>this change is carozal</h1>
    const newImages = Array.of(
        [AA0, AA0S],
        [AA1, AA1S],
        [AA2, AA2S],
        [AA3, AA3S],
        [AA4, AA4S],
    );
    return newImages
};
export default AirpodsArray;