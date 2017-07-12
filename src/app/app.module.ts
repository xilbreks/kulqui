import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// AngularFire Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Services from this module
import { AuthService } from './auth.service';
import { AdminGuard } from './admin.guard';
import { MyBagService } from './my-bag.service';
import { ProductoService } from './producto.service';
import { TagService } from './tag.service';
import { UsersService } from './users.service';
import { VentasService } from './ventas.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ChartComponent } from './chart/chart.component';
import { ChatComponent } from './chat/chat.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { ChattComponent } from './chatt/chatt.component';
import { CompraComponent } from './compra/compra.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyBagComponent } from './my-bag/my-bag.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent, ProductFilterPipe } from './productos/productos.component';
import { TagsComponent } from './tags/tags.component';
import { TiendaComponent } from './tienda/tienda.component';
import { VentasComponent } from './ventas/ventas.component';

// Firebase settings
var config = {
    apiKey: "AIzaSyC0YvxCV8bxxUiCw7BfqZgJX9Owzy33FSI",
    authDomain: "kulqui-335b4.firebaseapp.com",
    databaseURL: "https://kulqui-335b4.firebaseio.com",
    projectId: "kulqui-335b4",
    storageBucket: "kulqui-335b4.appspot.com",
    messagingSenderId: "235730461817"
  };

// Routes
const tiendaRoutes: Routes = [
    {   path: 'home',
        component: HomeComponent
    },{ path: 'about',
        component: AboutComponent
    },{ path: 'productos',
        component: ProductosComponent
    },{ path: 'productos/:id',
        component: ProductDetailComponent
    },{ path: 'login',
        component: LoginComponent
    },{ path: 'chat',
        component: ChatUserComponent
    },{ path: 'mybag',
        component: MyBagComponent
    },{ path: 'compra',
        component: CompraComponent
    }
];
const ventasRoutes: Routes = [
    {   path: 'pedidos',
        component: PedidosComponent
    }
];
const analisisRoutes: Routes = [
    {   path: 'chart',
        component: ChartComponent
    }
];
const articulosRoutes: Routes = [
    {   path: 'producto',
        component: ProductoComponent
    },{   path: 'producto/:id',
        component: ProductEditComponent
    },
    {   path: 'tags',
        component: TagsComponent
    }
];
const chatRoutes: Routes = [
    {   path: 'chatt',
        component: ChattComponent
    },{   path: 'chatt/:id',
        component: ChatDetailComponent
    }
];

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tienda/home',
        pathMatch: 'full'
    },
    {
        path: 'tienda',
        component: TiendaComponent,
        children: tiendaRoutes
    },
    {
        path: 'ventas',
        component: VentasComponent,
        children: ventasRoutes,
        canActivate: [AdminGuard]
    },
    {
        path: 'analisis',
        component: VentasComponent,
        children: analisisRoutes,
        canActivate: [AdminGuard]
    },
    {
        path: 'articulos',
        component: VentasComponent,
        children: articulosRoutes,
        canActivate: [AdminGuard]
    },
    {
        path: 'chat',
        component: ChatComponent,
        children: chatRoutes,
        canActivate: [AdminGuard]
    }
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    AnalisisComponent,
    ArticulosComponent,
    ChartComponent,
    ChatComponent,
    ChatDetailComponent,
    ChatUserComponent,
    ChattComponent,
    CompraComponent,
    HomeComponent,
    LoginComponent,
    MyBagComponent,
    PedidosComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductoComponent,
    ProductosComponent,
    TagsComponent,
    TiendaComponent,
    VentasComponent,
    ProductFilterPipe
  ],
  providers: [
    AuthService,
    AdminGuard,
    MyBagService,
    ProductoService,
    TagService,
    UsersService,
    VentasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
