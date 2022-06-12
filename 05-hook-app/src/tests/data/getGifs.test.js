
import { getGifs } from "../../data/getGifs"

describe('test getGif', () =>{
     
    test('debe de traer 20 elementos', async() =>{
        
        const gifs = await getGifs('Pokemon');

        expect(gifs.length).toBe(20)

    })

    test('debe de traer 0 elementos si no hay categoria', async() =>{
        
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0)

    })


})