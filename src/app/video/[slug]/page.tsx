'use client'
import React, { useEffect, useRef, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useRouter } from 'next/navigation';

type Props = {
    params: { slug: string }
}

const Page = ({ params }: Props) => {

    const ToPage = useRouter()

    const listVideo = [
        {
            name: "video1",
        },
        {
            name: "video2",
        },
        {
            name: "video3",
        },
        {
            name: "video4",
        },
    ]


    const videoPlayer: any = useRef("")
    const [onPlay, setOnPlay] = useState<boolean>(false)
    const [opacity, setOpacity] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [closeButton, setCloseButton] = useState<boolean>(false)
    const [timeDuration, setTimeDuration] = useState<number>(0)
    const [seen, setSeen] = useState<any>("")
    const [change, setChange] = useState<number>(0)
    const play = () => {
        setOnPlay(true)
        videoPlayer.current && videoPlayer.current.play()
    }
    const pause = () => {
        setOnPlay(false)
        videoPlayer.current && videoPlayer.current.pause()
    }
    const end = (slug: string) => {
        setModalOpen(true)
    }

    const timeUpdate = () => {
        const duration = videoPlayer.current.duration;
        const currentTime = videoPlayer.current.currentTime;
        const durationPercent = currentTime / duration

        setTimeDuration(durationPercent * 100)
        if (durationPercent > 0.65) {
            setSeen((pre: any) => localStorage?.seen?.includes(params.slug.toString()) ? pre : pre ? pre + "," + params.slug.toString() : params.slug.toString())
            setCloseButton(true)
        } else {
            setCloseButton(false)
        }
    }

    useEffect(() => {
        seen ? localStorage.seen = seen : null
    }, [seen])

    useEffect(() => {
        setSeen(localStorage.seen)
    }, [])

    switch (params.slug) {
        case "finish":
            return (
                <main>
                    <div className="modal">
                        {listVideo.map((item: any, index: number) => seen.includes(item.name)).includes(false) ? <h3>not yet</h3> : <h3>congratulation!</h3>}
                    </div>
                </main>
            )
    }


    return (
        <main className='center'>
            {modalOpen ?
                <div className="modal">
                    {listVideo.map((item: any, index: number) => seen.includes(item.name)).includes(false) ? null :
                        <div className="button"><p onClick={() => ToPage.push("/video/finish")}>終了画面へ</p></div>}
                    <div className="items">
                        {listVideo.map((item: any, index: number) =>
                            <div className={`item ${seen.includes(item.name) ? "selected" : ""}`} key={index}>
                                <p>{item.name}</p>
                                <h4>complete</h4>
                            </div>)}
                    </div>
                </div> :
                <div className="videoBox">
                    <video ref={videoPlayer} src={'/videos/' + params.slug + ".mp4"} playsInline
                        onEnded={() => end(params.slug)} onTimeUpdate={() => timeUpdate()} />
                    <div className='timeline'><div className='timerun' style={{ width: timeDuration + "%" }}></div></div>
                    <div className={`playicon ${opacity && onPlay ? "opacity" : ""}`} onMouseEnter={() => setOpacity(false)} onMouseLeave={() => setOpacity(true)}>
                        {!onPlay ? <PlayArrowIcon onClick={() => play()} /> :
                            <PauseOutlinedIcon onClick={() => pause()} />}
                    </div>
                    {closeButton && <p className='closebutton'><CloseOutlinedIcon onClick={() => setModalOpen(true)} /></p>}
                </div>
            }
        </main>
    )
}

export default Page