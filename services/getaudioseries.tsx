import { SampleCollection1 } from "../data/audio/sample"
import { SampleCollection2 } from "../data/audio/sample"
import { AudioSeries } from "../data/audio/types"
// for fetching any specifing records data simply add parameters or use the seriesids
export function getaudioSeries(seriesids: number): AudioSeries[] {
    var audioSeries = []
    for (var i = 0; i < SampleCollection1.audioSeries.length; i++) {
        if (SampleCollection1.audioSeries[i].id === "1" || SampleCollection1.audioSeries[i].id === "2") {
            audioSeries.push(SampleCollection1.audioSeries[i])


        }
    }
    for (var i = 0; i < SampleCollection2.audioSeries.length; i++) {
        if (SampleCollection2.audioSeries[i].id === "1" || SampleCollection2.audioSeries[i].id === "1") {
            audioSeries.push(SampleCollection2.audioSeries[i])


        }
    }
    return audioSeries



}


export function getSingleAudioSeries(seriesids: string): AudioSeries[] {
    var audioSeries = []
    var sampleCollection = "SampleCollection" + seriesids


    if (sampleCollection == "SampleCollection2") {
        for (var i = 0; i < SampleCollection2.audioSeries.length; i++) {

            audioSeries.push(SampleCollection2.audioSeries[i])



        }

    }
    else {
        for (var i = 0; i < SampleCollection1.audioSeries.length; i++) {

            audioSeries.push(SampleCollection1.audioSeries[i])



        }

    }
    return audioSeries


}