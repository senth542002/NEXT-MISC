import Image from 'next/image'
import img from 'public/1.jpeg'
function PetsPage() {
    return (
        <div>
            {
                ['1','2','3','4','5'].map(path => {
                    return (
                        <div key={path}> 
                            <Image src={`/${path}.jpeg`}  alt='pet' width='580' height='420'/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PetsPage