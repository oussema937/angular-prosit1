import { Component } from '@angular/core';
import { Footer } from './sharedComponent/footer/footer';
import { Home } from './pages/home/home';
import { Header } from './sharedComponent/header/header';
import { ListConf } from './pages/list-conf/list-conf';

@Component({
  selector: 'app-root',
  imports: [Header, Home,ListConf, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
