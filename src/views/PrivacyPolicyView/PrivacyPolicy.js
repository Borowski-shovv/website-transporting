import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: 20  
    }
})

function PrivacyPolicy() {

     const classes = useStyles();

    return (
        <>
           <Container className={classes.root}>
                <Typography variant="h6">Polityka prywatności</Typography>
                <Typography variant="body2">Niniejsza Polityka Prywatności określa zasady przechowywania i dostępu do informacji na urządzeniach właściciela serwisu www.transport-szwecja.com za pomocą plików Cookies, służących realizacji usług świadczonych drogą elektroniczną.</Typography>

                <div >
                    <ol type="1">
                        <li className="paragraph">Informacje ogólne
                            <ol type="1">
                                <li>Właścicielem serwisu www.transport-szwecja.com jest firma Solidfach Michał Wasiluk.</li>
                                <li>Użytkownikiem serwisu jest podmiot, na którego rzecz właściciel serwisu świadczy usługi drogą elektroniczną lub na podstawie zawartej umowy.</li>
                                <li>Podmiotem zamieszczającym informacje w formie plików cookies (tzw. ciasteczek) i innych podobnych technologii w urządzeniu
                                końcowym Użytkownika (np. komputerze, laptopie, smartfonie, Smart TV) oraz uzyskującym do nich dostęp jest Solidfach Michał Wasiluk.</li>
                            </ol>
                        </li>
                        <li>Informacje zawarte w ofertach.
                            <ol type="1">
                                <li>Serwis pozyskuje informacje o użytkownikach poprzez:</li>
                                    <ol type="a">
                                        <li>dobrowolne wprowadzenie danych przez Użytkowników w momencie dokonywania rejestracji poprzez wypełnienie formularza, gromadzenie
                                        logo serwera www przez operatora hostingowego.</li>
                                        <li>Serwis może ponadto zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
                                    </ol>
                                <li>Dane podane przez Użytkownika w formularzu rejestrowym, mogą być udostępniane osobom trzecim jedynie za jego pisemną zgodą.</li>
                                <li>Dane podane w formularzu rejestrowym mogą stanowić zbiór potencjalnych Użytkowników właściciela Serwisu.</li>
                                <li>Dane podane w formularzu rejestracyjnym przetwarzane są w celu:</li>
                                    <ol type="a">
                                        <li>zapewnienia świadczenia przez subskrybcje Solidfach newsletter;</li>
                                        <li>tworzenia statystyk mających na celu ustalenie sposobu i zakresu korzystania przez Użytkownika z Serwisu i 		dopasowanie aplikacji do jego potrzeb;</li>
                                        <li>zapewnienia kontynuowania przez Użytkownika sesji po pierwszym zalogowaniu niezależnie od rodzaju otwieranych zakładek, bez konieczności każdorazowego logowania się na poszczególnych podstronach; prezentacji reklam typu AdSense.</li>
                                    </ol>
                            </ol>
                        </li>
                        <li>Informacja o plikach cookies.
                            <ol type="1">
                                <li>Serwis korzysta z plików cookies.</li>
                                <li>Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym użytkownika serwisu i przeznaczone są do korzystania ze stron internetowych serwisu.</li>
                                <li>Podmiotem zamieszczającym na urządzeniu końcowym użytkownika serwisu pliki cookies oraz uzyskującym do nich dostęp jest właściciel Serwisu.</li>
                                <li>Pliki cookies wykorzystywane są w celu identyfikacji oprogramowania wykorzystywanego przez użytkownika serwisu oraz w celu optymalizacji funkcjonowania oraz bezpieczeństwa serwisu. Pliki cookies zawierają dane domeny, z której pochodzą, określają czas przechowywania ich na komputerze użytkownika jak również posiadają przypisany numer.</li>
                                <li>W ramach serwisu stosowane są dwa zasadnicze rodzaje plików cookies:
                                    <ol type="a">
                                        <li>„sesyjne” które są plikami tymczasowymi, przechowywanymi w urządzeniu końcowym użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej).</li>
                                        <li>„stałe” które są przechowywane w urządzeniu końcowym użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez użytkownika.</li>
                                    </ol>
                                </li>
                                <li>Użytkownik ma możliwość ograniczenia stosowania plików cookies jednakże ograniczenie to może mieć wpływ na funkcjonalność i dostępność niektórych funkcji zawartych na stronach internetowych serwisu.</li>
                                <li>W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/.</li>
                            </ol>
                        </li>
                        <li>Udostępnienie danych.
                            <ol type="1">
                                <li>Dokonanie przez Użytkownika rejestracji i złożenie przez niego stosownego oświadczenia stanowi wyrażenie zgody na przechowywanie i przetwarzanie danych osobowych przez Serwis w celu realizacji usług, w oparciu o przepisy ustawy z dnia 29 sierpnia 1997 r. o ochronie danych osobowych (Dz. U. Nr 133 poz. 833 wraz ze zmianami).</li>
                                <li>Administratorem danych osobowych przetwarzanych w celu realizacji usług jest właściciel Serwisu.</li>
                                <li>Użytkownik ma prawo dostępu do swoich danych w celu kontroli i weryfikacji, a także ma prawo wystąpić do Administratora z wnioskiem o usunięcie swoich danych osobowych.</li>
                                <li>Dane udostępnione w serwisie podlegają udostępnieniu osobom trzecim wyłącznie w granicach prawem dozwolonych.</li>
                                <li>Dane umożliwiające identyfikację osoby fizycznej są udostępniane wyłączenie za zgodą tej osoby.</li>
                                <li>Właściciel serwisu ma prawo udzielania informacji zebranych przez serwis upoważnionym organom na podstawie zgodnych z prawem żądań w zakresie wynikającym z żądania.</li>
                            </ol>
                        </li>
                        <li>Postanowienia końcowe.
                            <ol typie="1">
                                <li>Właściciel serwisu zastrzega sobie prawo do wprowadzania zmian w obwiązującej w Serwisie polityce prywatności, a wynikających z istniejących lub wprowadzanych w przyszłości standardów, technologii, a także wymagań dotyczących prowadzonej działalności z wykorzystaniem internetu, jak również zmian wynikających z przepisów prawa.</li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </Container>  
        </>
    )
}

export default PrivacyPolicy
