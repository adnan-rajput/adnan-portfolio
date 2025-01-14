const Breadcrumbs = ({heading}) => {
    return (
        <>
            <div className="breadcrumbs d-flex align-items-center">
                <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
                    <h2>{heading}</h2>
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li style={{ color : 'orange' }}>{heading}</li>
                    </ol>
                </div>
            </div>
        </>
    )
}
export default Breadcrumbs;