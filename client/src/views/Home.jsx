import FilmCard from "../components/FilmCard";


export default function Home() {


    return (
        <>
            <div className="container-fluid min-vh-100 d-flex flex-column">
                <main className="content flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center py-4">
                    <h2 className="mb-4">Bienvenu notre platform de films</h2>
                    <div className="row w-100 justify-content-center">
                        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                            <FilmCard />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )

}