import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <>
     <img src="https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/482242281_1223264249802203_6467221059963962101_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEuvbFB3jULDkwBlQGrZhzIOPTX0A6m4po49NfQDqbimsYPVNnFGiPpcrLylQoACFyB97GKjemXjrvdGDYKdiOS&_nc_ohc=90pWMTfUgHoQ7kNvwFpWArE&_nc_oc=AdnWm4jWJHtmyWbyE-Sdyf9GEMlP8fKSzvAidZyUxHu0xQLqiYpjIH8FvqW2xeOVdTc&_nc_zt=23&_nc_ht=scontent-scl2-1.xx&_nc_gid=3RDLp87_ApDqmkFFczsXCg&oh=00_AfIUslzdZ6_r1rQDoyO1A0viKKuAFnX6eXGKjvWfHLXoSg&oe=683559C8" alt='errorPizza' /> 
    <Link 
    to="/">
    <button>Volver a Home</button>
    </Link>
    </>
  )
}
