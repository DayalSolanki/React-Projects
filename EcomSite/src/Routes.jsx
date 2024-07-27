import { AboutPage, CategoriesPage, ContactPage, ErrorPage, HomePage, 
    CategoryPage } from "../pages"; 
    import { Routes, Route } from "react-router-dom"; 
    export const RoutesComponent = () => { 
        return( 
            <Routes> 
                <Route index path="/" element={<HomePage/>}/> 
                <Route path="about" element={<AboutPage/>}/> 
                <Route path="contact" element={<ContactPage/>}/> 
                <Route path="categories" element={<CategoriesPage/>}> 
                    <Route 
                        index 
                        element={<h4 className="mt-4">Please select a category</h4>} 
                    ></Route> 
                    <Route path=":categoryname" element={<CategoryPage />} /> 
                </Route> 
                <Route path="*" element={<ErrorPage/>}/> 
            </Routes> 
        ) 
    } 