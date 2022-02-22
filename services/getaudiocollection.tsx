import { SampleCollection1 } from "../data/audio/sample"
import { SampleCollection2 } from "../data/audio/sample"
import { AudioEpisode } from "../data/audio/types"
// for fetching any specifing records data simply add parameters or use the seriesids
export function getaudioCollection(audiocollectionid: number): AudioEpisode[] {
    var audioSeries = []
    for (var i = 0; i < SampleCollection1.audioSeries.length; i++) {
        for (var j = 0; j < SampleCollection1.audioSeries[i].episodes.length; j++) {
            if (SampleCollection1.audioSeries[i].episodes[j].id === "1") {
                audioSeries.push(SampleCollection1.audioSeries[i].episodes[j])


            }

        }
    }
    for (var i = 0; i < SampleCollection2.audioSeries.length; i++) {
        for (var j = 0; j < SampleCollection2.audioSeries[i].episodes.length; j++) {

            if (SampleCollection2.audioSeries[i].episodes[j].id === "1") {
                audioSeries.push(SampleCollection2.audioSeries[i].episodes[j])


            }


        }

    }
    return audioSeries



}



export function getaudioCollectionagainstaSeriesId(audiocollectionid: string, seriesId: string): AudioEpisode[] {
    var audioSeries: AudioEpisode[] = []

    if (audiocollectionid == "1") {

        for (var i = 0; i < SampleCollection1.audioSeries.length; i++) {

            if (SampleCollection1.audioSeries[i].id === seriesId) {


                for (var j = 0; j < SampleCollection1.audioSeries[i].episodes.length; j++) { audioSeries.push(SampleCollection1.audioSeries[i].episodes[j]) }
            }
        }
    }
    else if (audiocollectionid == "2") {

        for (var i = 0; i < SampleCollection2.audioSeries.length; i++) {


            if (SampleCollection2.audioSeries[i].id === seriesId) {


                for (var j = 0; j < SampleCollection2.audioSeries[i].episodes.length; j++) { audioSeries.push(SampleCollection2.audioSeries[i].episodes[j]) }
            }

        }

    }
    return audioSeries


}