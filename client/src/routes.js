import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAuthenticated => {
    if(isAuthenticated) {
        return (
            <Switch>
            <Route patch="/links" exact>
                <LinksPage />
            </Route>
                <Route patch="/create" exact>
                <CreatePage />
            </Route>
                <Route patch="/detail/:id">
                <DetailPage />
            </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }

    return (
        <Switch>
        <Route patch="/" exact>
            <AuthPage/>
        </Route>
            <Redirect to="/" />
        </Switch>
    )
}