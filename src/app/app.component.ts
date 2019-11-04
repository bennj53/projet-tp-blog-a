import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-tp-blog-a';

  items = [
    {
      title: 'Mon Premier post',
      content: 'Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de \"love it\" ou de \"don\'t love it\".',
      loveIt: 0
    },
    {
      title: 'Mon deuxième post',
      content: 'Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de \"love it\" ou de \"don\'t love it\".',
      loveIt: 0
    },
    {
      title: 'Encore un post',
      content: 'Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de \"love it\" ou de \"don\'t love it\".',
      loveIt: 0
    }
  ];
}
