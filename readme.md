Ticket System – projekt DevOps
Opis projektu

Projekt przedstawia prosty system zgłoszeń (ticketów). Aplikacja udostępnia REST API umożliwiające zarządzanie zgłoszeniami.

Aplikacja udostępnia następujące endpointy:
- GET /tickets – lista wszystkich zgłoszeń
- POST /tickets – dodanie nowego zgłoszenia
- DELETE /tickets/{id} – usunięcie zgłoszenia
- PUT /tickets/{id}/close – zmiana statusu zgłoszenia na CLOSED

Dane przechowywane są w pamięci aplikacji (brak bazy danych).

Wykorzystane technologie:
Node.js
Express
Git / GitHub
GitHub Projects (backlog)
GitHub Actions (CI/CD)
Docker (konteneryzacja)

Wymagania:
Node.js (wersja 18 lub nowsza)

Uruchomienie:
1. Sklonuj repozytorium:
    git clone https://github.com/klaudiamarszalek/projekt-devops
    cd ticket-system-devops
2. Zainstaluj zależności:
    npm install
3. Uruchom aplikację:
    node app.js

Aplikacja będzie dostępna pod adresem http://localhost:3000

