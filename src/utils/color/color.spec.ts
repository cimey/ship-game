import { Color } from "."



describe('<<<Color>>>', ()=>{

    it('should define values', ()=>{

        const color =new Color(1,1,1,1);

        expect(color.R).toEqual(1);
        expect(color.G).toEqual(1);
        expect(color.B).toEqual(1);
        expect(color.A).toEqual(1);
    });

    it('should throw an error if provided values incorrect', ()=> {

        expect(() => new Color(266, 2, 3, 0.1)).toThrowError(/red/)
        expect(() => new Color(-1, 2, 3, 0.1)).toThrow(/red/)
        expect(() => new Color(1.3, 2, 3, 0.1)).toThrow(/red/)
    
        expect(() => new Color(255, 266, 3, 0.1)).toThrow(/green/)
        expect(() => new Color(255, -1, 3, 0.1)).toThrowError(/green/)
        expect(() => new Color(255, 2.5, 3, 0.1)).toThrowError(/green/)
    
        expect(() => new Color(255, 25, 266, 0.1)).toThrowError(/blue/)
        expect(() => new Color(255, 25, -2, 0.1)).toThrowError(/blue/)
        expect(() => new Color(255, 0, 2.5, 0.1)).toThrowError(/blue/)
    
        expect(() => new Color(255, 255, 255, -1)).toThrowError(/alpha/)
        expect(() => new Color(255, 255, 255, 1.2)).toThrowError(/alpha/)
    })

    it('should instantiate from string', () => { 
        const rgba = Color.FromString('rgba(1, 2, 3, 0.1)')
        expect(rgba.R).toEqual(1)
        expect(rgba.G).toEqual(2)
        expect(rgba.B).toEqual(3)
        expect(rgba.A).toEqual(0.1)
     })

     it('should convert to string', () => {
        const rgba = new Color(1, 2, 3, 0.1)
        expect(rgba.AsString()).toBe('rgba(1, 2, 3, 0.1)')
      })

      it('should throw an error if cannot instantiate from string', () => {
        expect(() => Color.FromString('')).toThrow()
        expect(() => Color.FromString('?')).toThrow()
        expect(() => Color.FromString('rgba()')).toThrow()
        expect(() => Color.FromString('rgba(1)')).toThrow()
        expect(() => Color.FromString('rgba(1,2)')).toThrow()
        expect(() => Color.FromString('rgba(1,2,3)')).toThrow()
      })
})