import { AboutComponent } from '../app/about/about.component'
import { BarChartComponent } from '../app/bar-chart/bar-chart.component'
import { RouterModule } from '@angular/router';

const routes = [
    { path: 'about', component: AboutComponent },
    { path: 'Population', component: BarChartComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' }

];
export const rts = RouterModule.forRoot(routes);