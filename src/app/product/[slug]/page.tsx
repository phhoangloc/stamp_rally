'use client'
import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
type Props = {
    params: { slug: string }
}

const Page = ({ params }: Props) => {

    const ToPage = useRouter()
    const mainRef: any = useRef()
    const scrollRef: any = useRef()

    const listProduct = [
        {
            slug: "product1",
            name: "商品1",
            img: "https://img.rurubu.jp/img_srw/andmore/images/0000523519/xyqThdRNlRcksavlK3FuCCKZumiceYYO1SJ22n1W.jpg",
            detail: `
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>

            `,
        },
        {
            slug: "product2",
            name: "商品2",
            img: "https://img.rurubu.jp/img_srw/andmore/images/0000523519/xyqThdRNlRcksavlK3FuCCKZumiceYYO1SJ22n1W.jpg",
            detail: `
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>

            `,
        },
        {
            slug: "product3",
            name: "商品3",
            img: "https://www.palcoop.or.jp/osusume/development/images/0400275692CK_01.jpg",
            detail: `
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>

            `,
        },
        {
            slug: "product4",
            name: "商品4",
            img: "https://www.palcoop.or.jp/osusume/development/images/0400275692CK_01.jpg",
            detail: `
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>
            <p className="text">初めまして！私の名前は太郎です。日本語を勉強しています。これは私のウェブサイトです。ここでは、日本語や日本の文化についての情報を共有しています。興味があれば、ぜひ見てください！どうぞよろしくお願いします。</p>

            `,
        },
    ]

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [seen, setSeen] = useState<any>("")

    useEffect(() => {
        seen ? localStorage.seenproduct = seen : null
    }, [seen])

    useEffect(() => {
        setSeen(localStorage.seenproduct)
    }, [])

    const mainScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        const detailBox: Element | null = e.currentTarget.querySelector(".detailBox");
        const texts = detailBox && detailBox.querySelectorAll("p");
        if (texts) {
            for (let index = 0; index < texts?.length; index++) {
                if (texts[index].offsetTop <= e.currentTarget?.offsetHeight + e.currentTarget?.scrollTop - 100) { texts[index].style.opacity = "1", texts[index].style.transform = "translateY(0px)"; }
            }
        }
        // texts?.forEach((text: any, index: number) => { if (text.offsetTop <= e.currentTarget?.offsetHeight + e.currentTarget?.scrollTop) { texts[index].style.opacity = 1 } })
        if (e.currentTarget?.offsetHeight + e.currentTarget?.scrollTop === scrollRef.current?.offsetHeight) {
            setSeen((pre: any) => localStorage?.seenproduct?.includes(params.slug.toString()) ? pre : pre ? pre + "," + params.slug.toString() : params.slug.toString())
        }
    }


    switch (params.slug) {
        case "finish":
            return (
                <main>
                    <div className="modal">
                        {listProduct.map((item: any, index: number) => seen.includes(item.slug)).includes(false) ? <h3>not yet</h3> : <h3>congratulation!</h3>}
                    </div>
                </main>
            )
    }


    return (
        <main ref={mainRef} className='scrollNone' onScroll={(e) => mainScroll(e)}>
            {modalOpen ?
                <div className="modal">
                    {listProduct.map((item: any, index: number) => seen.includes(item.name)).includes(false) ? null :
                        <div className="button"><p onClick={() => ToPage.push("/product/finish")}>終了画面へ</p></div>}
                    <div className="items">
                        <CloseIcon style={{ position: "absolute", top: "5px", right: "5px" }} onClick={() => setModalOpen(false)} />
                        {listProduct.map((item: any, index: number) =>
                            <div className={`item ${seen.includes(item.slug) ? "selected" : ""}`} key={index}>
                                <p>{item.name}</p>
                                <h4>complete</h4>
                            </div>)}
                    </div>
                </div> :
                <div className="productBox" ref={scrollRef}>
                    <Image src={listProduct[listProduct.findIndex(element => element.slug === params.slug)].img} width={500} height={500} style={{ width: "100%", height: "auto", marginTop: "50px" }} alt='cover' />
                    <h2 style={{ margin: "50px 0 15px" }}>{listProduct[listProduct.findIndex(element => element.slug === params.slug)].name}</h2>
                    <div className='detailBox' dangerouslySetInnerHTML={{ __html: listProduct[listProduct.findIndex(element => element.slug === params.slug)].detail }} />
                    <div className='center' style={{ height: "100px", background: "#444", color: "white", textAlign: "center" }}>
                        <h4>ご覧いただきありがとうございます</h4>
                        <p>スタンプは<span style={{ textDecoration: "underline", color: "#aaa", cursor: "pointer" }} onClick={() => setModalOpen(true)}>こちら</span>にご覧ください</p>
                    </div>
                </div>
            }
        </main>
    )
}

export default Page