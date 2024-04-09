
export const fileToBytes = async (files: File[]) => {
    let dataBytes: Uint8Array[] = [];
    let error = null;

    const promises: Promise<Uint8Array>[] = [];
    files.forEach((f) => {
        promises.push(new Promise<Uint8Array>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const arrayBuffer = e.target?.result;
                if(arrayBuffer === null || arrayBuffer === undefined || typeof arrayBuffer === "string") {
                    reject(new Error("read file faild!"));
                } else {
                    const uint8Array = new Uint8Array(arrayBuffer);
                    resolve(uint8Array);
                }
            }

            reader.readAsArrayBuffer(f);
        }))
    })

    await Promise.all(promises)
        .then((data: Uint8Array[]) => {
            dataBytes = data;
        })
        .catch((err) => {
            error = err
        })

    return {
        dataBytes,
        error,
    };
}