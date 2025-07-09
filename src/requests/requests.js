const host = 'http://localhost:3000'

export default {
    async fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = reject;
        })
    },
    postFiles(files) {
        const data = new FormData();

        files.forEach(file => data.append(file.name, file))

        return fetch(`${host}/uploads`, {
            method: 'post',
            body: data
        })
    }
}