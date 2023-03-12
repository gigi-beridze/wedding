import image1 from '../assets/images/wedding1.png'
import image2 from '../assets/images/wedding2.png'
import image3 from '../assets/images/wedding3.png'
import image4 from '../assets/images/wedding4.png'
import image5 from '../assets/images/wedding5.png'
import { Card } from './UI/Card'

import '../assets/Styles/packages.scss'

export const Packages = () => {
  return (
   <section>
        <div className="packages row">
            <div className="default__middle__text">
                Wedding Packages
            </div>
            <div className="default__middle_text_small">
                Find the right package matching your needs
            </div>
            <div className="packages__cards">
                <div className="packages__first_card">
                    <Card title="dream wedding" image={image1} />
                    <Card title="papper work wedding" image={image2} />
                </div>
                <div className="packages__middle_card">
                    <Card title="wedding packages" image={image3} />
                </div>
                <div className="packages__second_card">
                    <Card title="fast wedding" image={image4} />
                    <Card title="customised wedding" image={image5} />
                </div>
            </div>
        </div>
   </section> 
  )
}