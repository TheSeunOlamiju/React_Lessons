export default function Page(props){
    return (
       <>
        <main className="m-10">
            <article className="mx-auto flex items-center  max-w-2xl border-b-1 border-background pb-10">
                <img
                    src={props.img.src}
                    alt={props.img.alt} className="w-50 h-60 object-cover mr-8 rounded-md"
                />

                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <img src="/src/assets/marker.png" alt="" className="w-3"/>
                        <span className="uppercase tracking-[.2rem]">{props.country}</span>
                        <a href={props.maps} className="ml-4 underline text-muted">View on Google Maps</a>
                    </div>

                    <h1 className="font-bold text-4xl text-dark mb-6">{props.place}</h1>

                    <p className="text-xs font-bold mb-3">
                        <time dateTime="2021-01-12">12 Jan, 2021</time>
                        {" - "}
                        <time dateTime="2021-01-24">24 Jan, 2021</time>
                    </p>

                    <p className="text-sm">
                        {props.details}
                    </p>
                </div>
            </article>
        </main>
       </>
    );
}