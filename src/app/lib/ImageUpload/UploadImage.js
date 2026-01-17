export const uploadImage = async (image) => {
    const file = image.target.files[0];
    if (!file) return
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'my-images')
    const res = await fetch('https://api.cloudinary.com/v1_1/dz23btt8f/upload', {
        method: "POST",
        body: data
    })
    const uploadedImageurl = await res.json()
    return uploadedImageurl.url
}