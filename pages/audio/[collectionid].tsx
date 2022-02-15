import * as React from 'react'
import AudioCollectionId from "../../components/audiopagecomponents/audiocollectionid"

import { useRouter } from 'next/router'

const CollectionIdresults = () => {
    const router = useRouter()
    const { collectionid } = router.query





    return (
        collectionid == "1" ? <div><AudioCollectionId /></div> : <div>NoHello</div>

    )
}


export default CollectionIdresults