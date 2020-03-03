
new Promise((resolve, reject) => {
    const hitung = [];
    for(let i = 1; i <=3; i++) {
        console.log(i)
        setTimeout(() => {
            resolve(hitung)
        }, 1000)
    }
})

.then(x => console.log('Done')
).catch(error => console.log(error)
)
