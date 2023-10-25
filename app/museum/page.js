
import Gallery from "./gallery";
import SingleArt from "./single-art";


export default function Page(){

    return (
        <main>
            <header className="text-center bg-slate-700 text-slate-50 pt-5 pb-5">
                <h1 className="text-4xl">Random Art Gallery</h1>
                <h2 className="text-xl">from the Metropolitan Museum of Art</h2>
            </header>
            <Gallery />
            {/* <SingleArt /> */}
        </main>
    );

}