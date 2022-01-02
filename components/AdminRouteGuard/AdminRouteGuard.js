import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

const AdminRouteGuard = ({ children, admin }) => {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    const authCheck = useCallback((url) => {
        // redirect to login page if accessing a private page and not logged in 
        const publicPaths = ['/admin/login'];
        const path = url.split('?')[0];
        if (!admin?.id && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/admin/login',
                query: { returnUrl: router.asPath }
            });
            console.log('authorized', admin, publicPaths.includes(path))
        } else {
            setAuthorized(true);
            console.log('Not authorized')
        }
    }, [admin])

    useEffect(() => {
        // on initial load - run auth check 
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authCheck]);

    return (authorized && children);
}

export default AdminRouteGuard