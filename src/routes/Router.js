import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainScreen from '../pages/MainScreen';
import BakeryMap from '../pages/BakeryMap';
import ClickerGame from '../pages/ClickerGame';
import BakingClass from './../pages/BakingClass';
import NotFound from "../pages/NotFound";



//Router: 애플리케이션의 라우팅을 관리하며, 정의된 경로에 따라 적절한 컴포넌트를 렌더링해주는 컴포넌트 
function Router() {
    return (
        <BrowserRouter>
            {/* BrowserRouter는 리액트 애플리케이션에서 클라이언트 측 라우팅을 관리하는 최상위 컴포넌트. a 태그와는 달리 url의 변화에  따른 페이지의 새로고침 과정이 없기때문에 사용자가 쉽고 부드럽게 웹앱을 사용할 수 있도록 도움. 그 하위에 있는 모든 라우팅 관련 컴포넌트(Routes, Route 등)를 감싸줌*/}

            {/* Routes는 여러 Route 컴포넌트를 감싸는 형태.
             URL이 변경될 때 Routes는 하위에 정의된 Route들 중에서 현재 URL과 일치하는 첫 번째 경로를 찾아 해당 컴포넌트를 렌더링*/}

            {/* path 속성으로 URL 경로를 설정하고, component 속성으로 해당 경로에서 렌더링할 컴포넌트를 지정.
            "/"는 애플리케이션의 루트 경로.*/}
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/BakeryMap" element={<BakeryMap />} />
                <Route path="/ClickerGame" element={<ClickerGame />} />
                <Route path="/BakingClass" component={BakingClass} />
                <Route path="*" element={<NotFound />} />
                {/*정의되지 않은 경로로 접근하려는 경우 보여줄 컴포넌트*/}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;