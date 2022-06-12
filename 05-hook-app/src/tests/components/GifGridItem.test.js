import React from 'react';
import { shallow } from "enzyme"
import {GifGridItem} from "../../components/GifGridItem"

describe('test GifGridItem', () =>{
 
    const gif = {
        title: "titulo",
        url: "https://localhost/img.jpg"
    }
    const wrapper = shallow(<GifGridItem {...gif}/>)
    
    test('debe mosatar componente correctamente', () =>{
        
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener una imagen igual a la url y alt de los props', () =>{
        
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(gif.url)
        expect(img.prop('alt')).toBe(gif.title)
    })

    test('debe tener clase animate__pulse', () =>{
        
        const div = wrapper.find('div');

        expect(div.prop('className')).toContain('animate__pulse')

    })
})