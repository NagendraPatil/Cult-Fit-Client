import styles from "./Navbar.module.css"

export const Navbar = () => {
    return <div className={styles.Navbar}>
        <div>
            <img src="/navbar_icons/Cultfitlogo.svg" alt="" />
        </div>
        <div>
            <div>
                <img src="/navbar_icons/runicon.svg" alt="" />
                <p>CULT</p>
            </div>
            <div>
                <img src="/navbar_icons/Video.svg" alt="" />
                <p>LIVE</p>
            </div>
            <div>
                <img src="/navbar_icons/eaticon.svg" alt="" />
                <p>EAT</p>
            </div>
            <div>
                <img src="/navbar_icons/Mind.svg" alt="" />
                <p>MIND</p>
            </div>
            <div>
                <img src="/navbar_icons/care.svg" alt="" />
                <p>CARE</p>
            </div>
            <div>
                <img src="/navbar_icons/Bag.svg" alt="" />
                <p>STORE</p>
            </div>

        </div>
        <div>
            <div>
                <img src="/navbar_icons/Ellipse.svg" alt="" />
                <p>Location</p>
            </div>
            <div>
                <img src="/navbar_icons/usericon.svg" alt="" />
                <p>Login</p>
            </div>
            <div>
                <img src="/navbar_icons/shoppingcarticon.svg" alt="" />
            </div>
        </div>
    </div>
}