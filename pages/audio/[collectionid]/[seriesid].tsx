import * as React from 'react'
import AudioCollectionId from "../../../components/audiopagecomponents/audiocollectionseriesid"


import { useRouter } from 'next/router'

const AudioCollectionSeries = () => {
    const router = useRouter()
    const { collectionid } = router.query
    const { seriesid } = router.query





    return (

        <div><AudioCollectionId seriesId={seriesid} collectionId={collectionid} /></div>

    )
}


export default AudioCollectionSeries