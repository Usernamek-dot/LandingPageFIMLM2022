export const Footer = () => {
    return (
        <>
            <div className="justify-between flex flex-row">

                <div>
                    <Logo className="fill-current h-8 w-8 mr-2" />
                </div>
                <div>  <h6>copyright <span>@</span> 2022</h6>  </div>
                <div>
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                </div>
            </div>

        </>)
}