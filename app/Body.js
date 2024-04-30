import styles from './styles.css'
import MusicBox from './MusicBox'
export default function Body(){ //Body component
    return (
        <div className="body-content">
            <MusicBox name={"Style"} artist={"Taylor Swift"} album={"1989 Taylor's Version"} source={"style.png"} link={"https://www.youtube.com/watch?v=-CmadmM5cOk"} lyric={"Cause you got that James Dean daydream look in your eyes"} />
            <MusicBox name={"Blank Space"} artist={"Taylor Swift"} album={"1989 Taylor's Version"} source={"Blank Space.png"} link={"https://www.youtube.com/watch?v=gir8BEqAutk&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=3"} lyric={"Or its gonna go down in flames"} />
            <MusicBox name={"Welcome to New York"} artist={"Taylor Swift"} album={"1989 Taylor's Version"} source={"Welcome to New York.png"} link={"https://www.youtube.com/watch?v=FsGdznlfE2U&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=1"} lyric={"Welcome to New York, its been waiting for you"} />
            <MusicBox name={"Bad Blood"} artist={"Taylor Swift"} album={"1989 Taylor's Version"} source={"Bad Blood.png"} link={"https://www.youtube.com/watch?v=lUvBk4owRNU&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=8"} lyric={"I've got bad blood, You know it used to be mad love"} />
            <MusicBox name={"Clean"} artist={"Taylor Swift"} album={"1989 Taylor's Version"} source={"Clean.png"} link={"https://www.youtube.com/watch?v=gir8BEqAutk&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=3"} lyric={"And the sky turned black like a perfect storm"} />
            <MusicBox name={"I Know Places"} artist={"Taylor Swift"} album={"1989 Taylor's Version"} source={"I Know Places.png"} link={"https://www.youtube.com/watch?v=gir8BEqAutk&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=3"} lyric={"I know places, We won't be found"} />
            <MusicBox name={"Wonderland"} artist={"Taylor Swift"} album={"1989 Taylor's Version"} source={"Wonderland.png"} link={"https://www.youtube.com/watch?v=gir8BEqAutk&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=3"} lyric={"We found wonderland, you and I got lost in it"} />
            <MusicBox name={"New Romantics"} artist={"Taylor Swift"} album={"1989 Taylor's Version"} source={"New Romantics.png"} link={"https://www.youtube.com/watch?v=gir8BEqAutk&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=3"} lyric={"But every night with us is like a dream"} />
            <MusicBox name={"How You Get The Girl"} artist={"Taylor Swift"} album={"1989 Taylor's Version"} source={"How You Get The Girl.png"} link={"https://www.youtube.com/watch?v=gir8BEqAutk&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=3"} lyric={"I think I am finally clean"} />
        </div>
    )
}


/*
song 1: Style | by Taylor Swift | 1989 Taylor's Version | https://www.youtube.com/watch?v=-CmadmM5cOk |'Cause you got that James Dean daydream look in your eyes'
song 2: Blank Space | by Taylor Swift | 1989 Taylor's Version | https://www.youtube.com/watch?v=gir8BEqAutk&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=3 |Or its gonna go down in flames
song 3: Welcome to New York | by Taylor Swift | 1989 Taylor's Version | https://www.youtube.com/watch?v=FsGdznlfE2U&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=1 |Welcome to New York, its been waiting for you
song 4: Bad Blood | by Taylor Swift | 1989 Taylor's Version | https://www.youtube.com/watch?v=lUvBk4owRNU&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=8 |I've got bad blood, You know it used to be mad love
song 5: Clean | by Taylor Swift | 1989 Taylor's Version | https://www.youtube.com/watch?v=AppsjTInqiw&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=13 |And the sky turned black like a perfect storm
song 6: I Know Places | by Taylor Swift | 1989 Taylor's Version | https://www.youtube.com/watch?v=0jTGzm-6cYE&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=12 |I know places, We won't be found
song 7: Wonderland  | by Taylor Swift | 1989 Taylor's Version | https://www.youtube.com/watch?v=JhICcmiIE80&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=14 |We found wonderland, you and I got lost in it
song 8: New Romantics | by Taylor Swift | 1989 Taylor's Version | https://www.youtube.com/watch?v=3-BcH7KowGE&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=16 |But every night with us is like a dream
song 9: "Slut!"" | by Taylor Swift | 1989 Taylor's Version | https://www.youtube.com/watch?v=qrxsceexTBw&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=17 | If they call me a slut, you know it might be worth it for once
song 10: How You Get The Girl | by Taylor Swift | 1989 Taylor's Version | https://www.youtube.com/watch?v=rnwD7veCoFQ&list=OLAK5uy_mvRgYPh8u-KBTbU6mkGyrg5CBduos_LEY&index=10 | I think I am finally clean
*/