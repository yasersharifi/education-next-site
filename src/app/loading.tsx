"use client";

export default function Loading() {
    return (
        <div
            className="flex items-center justify-center w-full h-screen"
        >
            <>
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                margin: "auto",
                background: "none",
                display: "block",
                shapeRendering: "auto"
                }}
                width="61px"
                height="61px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle cx={30} cy={50} fill="#e90c59" r={20}>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    keyTimes="0;0.5;1"
                    values="30;70;30"
                    begin="-0.5s"
                />
                </circle>
                <circle cx={70} cy={50} fill="#46dff0" r={20}>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    keyTimes="0;0.5;1"
                    values="30;70;30"
                    begin="0s"
                />
                </circle>
                <circle cx={30} cy={50} fill="#e90c59" r={20}>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    keyTimes="0;0.5;1"
                    values="30;70;30"
                    begin="-0.5s"
                />
                <animate
                    attributeName="fill-opacity"
                    values="0;0;1;1"
                    calcMode="discrete"
                    keyTimes="0;0.499;0.5;1"
                    dur="1s"
                    repeatCount="indefinite"
                />
                </circle>
                {/* [ldio] generated by https://loading.io/ */}
            </svg>
            </>
        </div>
    );
}
