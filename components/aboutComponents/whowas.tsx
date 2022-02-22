import React from 'react'
import styles from "../../styles/about.module.css"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const whowas = () => {
    return (
        <Card className={styles.whoWas} >
            <Typography variant="h3" component="div" className={styles.aboutHeading}>
                Who was Datta Kaka ?


            </Typography>
            <Typography component="div" className={styles.lineBreak} >
                Datta Kaka (Datta Uncle) was such a person who not only reached the peak very early in his life span but then spent the rest of his life helping others. Right from the beginning of his life, his focus was on understanding life so that living becomes happy and smooth for himself and others. He was a follower of Brahmachaitanya Gondavlekar Maharaj from Gondavle, District Satara. His teachings are very easy, universal, time-tested and very much practical and so it is easy to follow and achieve the peak of happiness.


            </Typography>
            <Typography variant="h3" className={styles.aboutHeading}>
                What were Datta Kaka’s teachings ?
            </Typography>
            <Typography component="div" className={styles.lineBreak}>
                Some of his teachings include that - characteristics of some matter like sugar is always sweet, salt is salty, chilli is spicy and Bitter gourd is bitter, lemon is sour and so on; this can be a problem to a few and a point to complain; why bitter gourd is bitter and salt is so salty but a seasoned chef instead of complaining about this phenomena; uses them to make a very tasty, satisfying to taste buds, aromatic and finger-licking food. He learns to use the right amount of salt with spices, a pinch of sugar, and a drop of lime to make delicious food. He learns and so knows by applying salt on bitter gourd removes a big amount of bitterness and so on.. to make even bitterness tasty. He uses the above example to explain how life can be made beautiful and living smooth and happy just by learning and using characteristics of life in proper proportion. So the point of complaint actually becomes a point to cherish and enjoy. This learning, he used to call “Midas Touch” in life. This understanding and acceptance of “Midas Touch” in life is possible by chanting “Ram Nam”. So, in nutshell, HIS teaching indicates that merely chanting ‘Ram Nam’ and trying to learn about life makes any life easy, smooth, and full of happiness. How?


            </Typography>
            <Box className={styles.fontFamilyAbout}>According to HIM, understanding above in life means experiencing God’s hand in our day-to-day life which gives solace to the human being and so his reactions and consequent actions are changed making that person a different and hence a happy personality whose world changes to a Happy World. The tool he prescribed to experience God’s hand in one’s life is remembering God by chanting HIS divine, pure and loving name. And thanking HIM for whatever HE is doing in his life.</Box>

        </Card>
    )
}

export default whowas