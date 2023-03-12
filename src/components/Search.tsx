import '../assets/Styles/search.scss'
import search from '../assets/images/search.svg'

export const Search = () => {
    return (
        <section>
            <div className="container">
                <div className="container__section row">
                    <div className="container__title">
                        <span>
                        Love has no borders. The law does. Let us help you unite the two together and get married!
                        </span>
                    </div>
                    <div className="container__text">
                        <span>You are in the right place</span>
                    </div>
                    <div className="container__search">
                        <select>
                            <option>Wedding Packages</option>
                        </select>
                        <select>
                            <option>Category</option>
                        </select>
                        <input type="text" placeholder="Search" />
                        <button>
                            <img src={search} alt="icon" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="container__search active row">
                <div>
                    <select>
                        <option>Wedding Packages</option>
                    </select>
                </div>
                <div>
                    <select>
                        <option>Category</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Search" />
                </div>
                <div>
                    <button>
                        <img src={search} alt="icon" />
                    </button>
                </div>
            </div>
        </section>
    )
}