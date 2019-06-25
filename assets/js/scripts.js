function get_video_id(){
    let parts = window.location.href.split("/")
    let lastSegment = parts[parts.length-1]
    return lastSegment.split(".")[0]
}
// let video_id = get_video_id()
// console.log(video_id)
window.location.replace(`https://youtu.be/${get_video_id()}`)