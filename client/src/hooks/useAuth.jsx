import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import { jwtDecode } from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = "Employee"

    if (token)   
        {
               try {
                   const decoded = jwtDecode(token);
                   const { username, roles } = decoded.UserInfo || {}; 
                   console.log('decoded:',decoded)
       
                   isManager = Array.isArray(roles) && roles.includes('Manager');
                   isAdmin = Array.isArray(roles) && roles.includes('Admin');
       
                   if (isManager) status = "Manager";
                   if (isAdmin) status = "Admin";
       
                   return { username, roles, status, isManager, isAdmin   
        };
               } catch (error) {
                   console.error('Error decoding JWT token:', error);
                   return { username: '', roles: [], isManager, isAdmin, status };
               }
           }
       
           return { username: '', roles: [], isManager, isAdmin, status };
       }
export default useAuth