import LoadingContext from "../../Context/LoadingBar/LoadingContext";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";

const Loading = (props) => {
    const [progress, setProgress] = useState(0)

    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />

            <br />

            <LoadingContext.Provider value={{ progress, setProgress }}>
                {props.children}
            </LoadingContext.Provider>
        </>
    )
}

export default Loading