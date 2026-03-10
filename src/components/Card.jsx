export default function Card({ title, img }) {

    return (
        <div className="col-12 col-md-6 col-lg-2">

            <div className="card rounded-0 bg-transparent border border-0">
                <img src={img} alt="Comics" />
                <div className="card-body p-0">
                    <p className="card-text text-white mt-3">{title.toUpperCase()}</p>

                </div>

            </div>
        </div>

    )

}