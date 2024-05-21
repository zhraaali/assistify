import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'

const Welcomepage = () => {
  return (
    <div>
        <Navbar link=' سجل خروج'
                address='logout'
        />
            <Hero desc2='استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى 200,000 دولار أمريكي من خلال منصتنا.'
                  title='استثمر من أي مكان في العالم واحصل على الإقامة التركية'
                  desc1='أحصل على الإقامة التركية بكل سهولة مع Assetify '
                   />
    </div>
  )
}

export default Welcomepage