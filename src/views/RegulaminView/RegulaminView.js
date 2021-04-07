import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: 20  
    }
})

const RegulaminView = () => {

    const classes = useStyles();

    return (
        <>
            <Container className={classes.root}>
                <Typography variant="h6">Regulamin</Typography>
                <div >
                    <ol type="1">
                        <li className="paragraph">Postanowienia ogólne
                            <ol type="1">
                                <li>Niniejszy Regulamin określa warunki i zasady świadczenia usług przez firmę Solidfach Michał Wasiluk.</li>
                                <li>Zakres działalności firmy Solidfach Michał Wasiluk obejmuje obszar Polski i Szwecji.</li>
                                <li>Solidfach Michał Wasiluk świadczy usługi na rzecz osób fizycznych, prawnych, jak i jednostek organizacyjnych nie posiadających osobowości prawnej.</li>
                            </ol>
                        </li>
                        <li>Zakres obowiązywania
                <ol type="1">
                <li>Podpisanie Listu Przewozowego przez Nadawcę stanowi dowód zapoznania się i akceptację treści niniejszego Regulaminu. Od tego momentu wszystkie postanowienia niniejszego Regulaminu stają się wiążące dla obu stron chyba, że postanowienia odrębnej umowy zawartej pomiędzy stronami stanowią inaczej.</li>
                <li>W sprawach nieokreślonych w warunkach niniejszego Regulaminu zastosowanie mają Konwencja CMR i Ustawa Prawo Przewozowe jako podstawy prawne do określania praw, obowiązków i odpowiedzialności stron zlecenia transportowego.</li>
                </ol>
                </li>
                <li>Wyłączenia z przewozu
                <ol type="1">
                <li>Z przewozu wyłącza się:
                <ol type="a">
                <li>Przedmioty, których przewóz jest zabroniony na podstawie odrębnych przepisów prawa.</li>
                <li>Przedmioty, które z powodu swoich wymiarów, masy lub innych właściwości nie nadają się do przewozu środkami transportowymi.</li>
                <li>Przedmioty niebezpieczne w rozumieniu odrębnych przepisów prawa, w tym w szczególności: materiały łatwopalne, wybuchowe, radioaktywne, substancje żrące lub cuchnące, ADR, broń i amunicję.</li>
                <li>Przesyłki zawierające narkotyki, wyroby tytoniowe, alkohol, leki, środki psychotropowe, z wyjątkiem przedmiotów wysyłanych w celach naukowych lub medycznych przez ustawowo do tego upoważnione instytucje.</li>
                <li>Przesyłki zawierające zwłoki i szczątki zwłok ludzkich.</li>
                <li>Przesyłki mające na opakowaniu lub widocznej części zawartości napisy lub rysunki naruszające dobra chronione przez prawo.</li>
                <li>Przesyłki zawierające dzieła sztuki, antyki, kamienie i metale szlachetne w jakiejkolwiek postaci, bądź formie, waluty, zbywalne papiery wartościowe, certyfikaty.</li>
                <li>Przesyłki zawierające rzeczy łatwo psujące się.</li>
                <li>Wszelkie przesyłki, które swoimi właściwościami mogą stanowić zagrożenie dla zdrowia i życia osób mających z nimi styczność, bądź mogące uszkodzić lub zniszczyć inne przesyłki.</li>
                <li>W przypadku stwierdzenia naruszenia przez Nadawcę powyższych postanowień zapłaci on karę umowną w wysokości pięciokrotnej wartości frachtu firmie Solidfach Michał Wasiluk z tytułu wykonania usługi. Zapłata kary, o której mowa powyżej nie pozbawia firmy Solidfach Michał Wasiluk prawa dochodzenia odszkodowania przewyższającego jej wysokość na zasadach ogólnych.</li>
                </ol>
                </li>
                </ol>
                </li>
                <li>Solidfach Michał Wasiluk może odmówić wykonania usługi w następujących przypadkach:
                <ol type="1">
                <li>Niemożności jej wykonania z uwagi na określony czas lub miejsce dostarczenia przesyłki.</li>
                <li>Niewłaściwego zabezpieczenia przesyłki przez Nadawcę.</li>
                <li>Gdy istnieje uzasadnione podejrzenie, iż deklaracja zawartości i/lub wagi przesyłki nie zgadza się ze stanem faktycznym.</li>
                </ol>
                </li>
                <li>Warunki świadczenia usług
                <ol type="1">
                <li>Przesyłka po telefonicznym bądź e-mailowym zgłoszeniu przez Nadawcę lub Zleceniodawcę jest odbierana spod wskazanego adresu w danej miejscowości, bądź może zostać nadana w którymkolwiek z Punktów Obsługi Klienta w godzinach otwarcia.</li>
                <li>Solidfach Michał Wasiluk przesyła przesyłki w przewidywanym terminie doręczenia lub gwarantowanym terminie, o ile strony w formie pisemnej nie postanowią inaczej. Nadawca może wydać inną dyspozycję co do terminu doręczenia przesyłki, który może być krótszy niż terminy gwarantowane przez Solidfach Michał Wasiluk, jeżeli Solidfach Michał Wasiluk wyrazi na to zgodę potwierdzoną na Liście Przewozowym.</li>
                <li>Zasadą jest doręczanie przesyłki do rąk własnych Odbiorcy. W przypadku, gdy Odbiorcą jest osoba prawna lub jednostka organizacyjna nie posiadająca osobowości prawnej przesyłkę pozostawia się za pokwitowaniem w kancelarii, recepcji lub też w miejscu pełniącym podobną funkcję.</li>
                <li>W przypadku, gdy Odbiorca odmówi przyjęcia przesyłki jest ona zwracana Nadawcy. W przypadku, gdy Nadawca także odmówi przyjęcia takiej Przesyłki, Przesyłkę przechowuje Solidfach Michał Wasiluk.</li>
                <li>Solidfach Michał Wasiluk przechowuje Przesyłkę, o której mowa w pkt 5.4 &sect;5. przez okres 30 dni od terminu odbioru Przesyłki. Jeśli w tym terminie Nadawca nie wskaże wykonalnych wskazówek do usunięcia przeszkody w przewozie, Solidfach Michał Wasiluk na zasadach określonych w przepisach prawa dokona utylizacji takiej Przesyłki.</li>
                <li>Nadawcę odmawiającego przyjęcia Przesyłki uważa się za poinformowanego o zamierzonej utylizacji Przesyłki.</li>
                <li>Koszty przewozu (w obie strony) oraz przechowania ponosi w całości Nadawca.</li>
                <li>W przypadku wykonywania usługi przewozu Przesyłek, usługi pocztowej lub usługi dodatkowej na zlecenie Zleceniodawcy i na jego koszt, w razie odmowy uiszczenia należności na rzecz firmy Solidfach Michał Wasiluk przez Zleceniodawcę, do jej zapłaty zobowiązany jest Nadawca.</li>
                <li>W przypadku nieobecności Odbiorcy, przedstawiciel firmy Solidfach Michał Wasiluk pozostawia awizo ze wskazaniem gdzie i kiedy Odbiorca może osobiście (lub przez upoważnionego przedstawiciela) odebrać Przesyłkę lub uzgodnić kolejną dostawę przesyłki pod swój adres. Termin do odbioru Przesyłki przez Odbiorcę wynosi 3 dni robocze liczone od dnia następnego po dniu pozostawienia awiza. Po upływie terminu odbioru Przesyłka zwracana jest Nadawcy na jego koszt.</li>
                <li>Na pisemny wniosek Odbiorcy lub Nadawcy, Solidfach Michał Wasiluk może dodatkowo, odpłatnie świadczyć usługę przekierowania Przesyłki pod wskazany przez Odbiorcę lub Nadawcę adres. Dokonanie opisanych powyżej rozporządzeń jest możliwe po przedstawieniu przez Nadawcę lub Odbiorcę otrzymanego egzemplarza Listu Przewozowego. Opłatę za przekierowanie Przesyłki ponosi odpowiednio Odbiorca lub Nadawca zgodnie z obowiązującym Cennikiem. Usługa przekierowania nie dotyczy Przesyłek za pobraniem.</li>
                <li>Za odmowę przyjęcia Przesyłki uważana jest odmowa zapłaty za całość, bądź część wykonanej usługi przewozu Przesyłek lub usługi pocztowej, a także odmowa uiszczenia należności za dokonanie przez firmę Solidfach Michał Wasiluk dodatkowych czynności, o których mowa w pkt 5.4 &sect;5.</li>
                <li>Zleceniodawca zobowiązuje się do wypełnienia zobowiązań finansowych zawartych w Zleceniu i upoważnia Zleceniobiorcę do wystawienia faktur VAT bez podpisu Odbiorcy. Faktura wystawiona w walucie  euro/koronach szwedzkich jest przeliczana na złotówki wg średniego kursu NBP z ostatniego dnia roboczego poprzedzającego dzień rozładunku/zakończenia transportu.</li>
                <li>W przypadku rezygnacji ze strony Zleceniodawcy z usług Zleceniobiorcy w czasie krótszym, niż 24 godziny przed planowanym terminem załadunku, Zleceniodawca jest zobowiązany zapłacić Zleceniobiorcy karę umowną w wysokości 50 EUR. Zleceniodawca może zrezygnować z usług Zleceniobiorcy bez zapłaty kary umownej jeśli powiadomi Zleceniobiorcę o swojej rezygnacji nie później niż na 24 godziny przed planowanym terminem załadunku (nie wliczając weekendów oraz dni wolnych ustawowo od pracy (świąt). </li>
                <li>Zmiany Zlecenia muszą być potwierdzone w formie pisemnej pod rygorem nieważności.</li>
                <li>Ewentualne reklamacje Zleceniodawca może zgłosić w czasie krótszym niż 1 dzień od terminu wykonania Zlecenia. Zleceniodawca i Zleceniobiorca zgodnie oświadczają, iż wszelkie spory rozstrzygane będą polubownie. Sądem miejscowo właściwym do rozpoznania wszelkich sporów będzie Sąd w Białymstoku.</li>
                </ol>
                </li>
                <li>Opakowanie Przesyłki
                <ol type="1">
                <li>Nadawca jest obowiązany do nadania firmie Solidfach Michał Wasiluk Przesyłki  w stanie umożliwiającym jej prawidłowy przewóz i wydanie bez ubytku lub uszkodzenia.</li>
                <li>Rzeczy, które ze względu na ich właściwości wymagają specjalnego opakowania Nadawca jest obowiązany nadać firmie Solidfach Michał Wasiluk w opakowaniu, które w szczególności powinno być:
                <ol type="a">
                <li>Zamknięte i zabezpieczone skutecznym środkiem takim jak taśma samoprzylepna, plomby czy pieczęcie lakowe.</li>
                <li>Odpowiednio wytrzymałe.</li>
                <li>Uniemożliwiać dostęp do zawartości bez pozostawienia widocznych śladów.</li>
                <li>Opisane, gdy wymagają tego właściwości lub zawartość Przesyłki, poprzez oznakowanie np. „góra/dół” lub „uwaga szkło”.</li>
                <li>Pozbawione wszelkich cech, które mogłoby w jakikolwiek sposób uszkodzić tę lub inne przewożone Przesyłki.</li>
                </ol>
                </li>
                <li>Opakowanie Przesyłki wlicza się do jej masy.</li>
                </ol>
                </li>
                <li>Nadanie Przesyłki
                <ol type="1">
                <li>Przyjęcie Przesyłki od Nadawcy odbywa się na podstawie Listu Przewozowego Solidfach Michał Wasiluk.</li>
                <li>Nadawca gwarantuje, iż zawartość każdej Przesyłki jest prawidłowo i zgodnie ze stanem rzeczywistym zadeklarowana oraz opisana w Zleceniu i/lub Liście Przewozowym.</li>
                <li>Nadawca ponosi pełną odpowiedzialność za wszelkie dane i oświadczenia jakie podaje wypełniając List Przewozowy, a które to dane i oświadczenia mogą mieć wpływ na wykonanie przez Solidfach Michał Wasiluk usług Przewozu Przesyłek lub Usług pocztowych.</li>
                <li>Nadawca korzystający z wzoru Listu Przewozowego dostarczonego przez Solidfach Michał Wasiluk obowiązany jest do własnoręcznego wypisania takiego Listu Przewozowego lub do akceptacji Listu Przewozowego wypełnionego na podstawie danych przesłanych przez Nadawcę drogą mailową. W innym przypadku za wypisanie Listu Przewozowego pobierana jest dodatkowa opłata zgodnie z Cennikiem. Wypisanie Listu Przewozowego przez Solidfach Michał Wasiluk nie zwalnia Nadawcy od odpowiedzialności, o której mowa w &sect;5.</li>
                <li>Solidfach Michał Wasiluk w każdym czasie może dokonać sprawdzenia wagi lub rozmiarów Przesyłki przyjętej do przewozu.</li>
                <li>Jeżeli zachodzi taka konieczność Solidfach Michał Wasiluk może także w każdym czasie sprawdzić zawartość Przesyłki lub sposób jej zabezpieczeń. Sprawdzenia takiego dokonuje się w obecności Nadawcy, a jeżeli wezwanie go nie jest możliwe albo gdy nie zgłosi się w wyznaczonym terminie, przedstawiciel firmy Solidfach Michał Wasiluk dokonuje sprawdzenia w obecności świadka, którego dane udostępnione zostaną Nadawcy drogą mailową. Wynik sprawdzenia Przesyłki zamieszcza się w Liście Przewozowym albo dołączonym do niego Protokole.</li>
                <li>Wykazanie niezgodności, o których mowa w &sect;3 stanowi podstawę do odmowy przyjęcia Przesyłki do przewozu, a także zmiany warunków umowy przewozu określonych w Liście Przewozowym. Koszty sprawdzenia Przesyłki, o którym mowa w pkt 8.6 &sect;8 zostaną doliczone do ceny wykonywanej usługi, w przypadku stwierdzenia przez Solidfach Michał Wasiluk niezgodności oświadczeń zawartych w Liście Przewozowym ze stanem rzeczywistym po sprawdzeniu Przesyłki.</li>
                <li>W przypadku naruszenia przez Nadawcę postanowień &sect;3 firmie Solidfach Michał Wasiluk przysługuje prawo do weryfikacji naliczonych opłat za świadczone usługi poprzez dokonanie odpowiedniej zmiany ceny wykonywanej usługi, zgodnie z Cennikiem lub Zleceniem.</li>
                </ol>
                </li>
                <li>Oznaczenie przesyłki
                <ol type="1">
                <li>Nadawca ma obowiązek zamieścić na Przesyłce, bądź jej opakowaniu podany na Liście Przewozowym adres, który musi być czytelny, nie może nosić śladów wycierania lub skreśleń, a w szczególności musi posiadać kod pocztowy, przy czym Solidfach Michał Wasiluk zapewnia dostęp do pocztowych książek kodowych we wszystkich punktach przyjmowania przesyłek.</li>
                </ol>
                </li>
                <li>Zawartość przesyłki
                <ol type="1">
                <li>Przyjęcie przez Solidfach Michał Wasiluk przesyłki do przewozu nie uzasadnia domniemania, iż jej opakowanie oraz zawartość odpowiada warunkom zawartym w Regulaminie.</li>
                <li>Solidfach Michał Wasiluk ma prawo otworzyć Przesyłkę i sprawdzić ją pod kątem zawartości.</li>
                <li>W przypadku znalezienia w przesyłce zawartości niezgodnej z przepisami Solidfach Michał Wasiluk podejmuje kontakt z nadawcą. Dalsza realizacja Przesyłki zostaje wstrzymana do czasu podjęcia ustaleń z Nadawcą.</li>
                </ol>
                </li>
                <li>Uszkodzenie przesyłki
                <ol type="1">
                <li>W przypadku uszkodzenia lub ubytku Przesyłki przedstawiciel firmy Solidfach Michał Wasiluk obowiązany jest spisać Protokół luz zrobić odpowiednią adnotację na Liście Przewozowym w obecności Odbiorcy, w którym ujęta będzie data i godzina doręczenia oraz opis uszkodzenia lub ubytku przesyłki. Prawidłowo sporządzony Protokół (podpisany przez Odbiorcę i przedstawiciela firmy Solidfach Michał Wasiluk) jest podstawą do zapłacenia odszkodowania. Wskutek przyjęcia przez Odbiorcę Przesyłki bez zastrzeżeń wygasają wszelkie roszczenia przeciwko firmie Solidfach Michał Wasiluk.</li>
                </ol>
                </li>
                <li>Wartość przesyłki
                <ol type="1">
                <li>Nadawca zobowiązany jest podać w Liście Przewozowym rzeczywistą wartość Przesyłki i opis zawartości, jeśli przekracza ona kwotę 100,00 zł pod rygorem utraty roszczeń przeciwko firmie Solidfach Michał Wasiluk przekraczających tę kwotę.</li>
                <li>W przypadku zadeklarowania rzeczywistej wartości Przesyłki wyższej niż 100,00 zł Solidfach Michał Wasiluk zobowiązany jest do ubezpieczenia Przesyłki w imieniu i na rzecz jej właściciela. Koszt ubezpieczenia ponosi Płatnik.</li>
                <li>Nadawca i Odbiorca podpisując List Przewozowy z zadeklarowaną wartością Przesyłki i opisem zawartości potwierdza tym samym, iż zapoznał się z warunkami zawartej na jego rzecz umowy ubezpieczenia i akceptuje je jako obowiązujące w przewozie przesyłek o zadeklarowanej wartości powyżej 100,00 zł.</li>
                </ol>
                </li>
                <li>Odpowiedzialność
                <ol type="1">
                <li>Solidfach Michał Wasiluk ponosi odpowiedzialność za utratę, ubytek lub uszkodzenie Przesyłki powstałe od przyjęcia jej do przewozu aż do jej wydania oraz za opóźnienie w przewozie, w zakresie określonym w niniejszym Regulaminie.</li>
                <li>Solidfach Michał Wasiluk nie ponosi odpowiedzialności, o której mowa w pkt 13.1., jeżeli utrata, ubytek lub uszkodzenie albo opóźnienie w przewozie Przesyłki powstały z przyczyn leżących po stronie Nadawcy lub Odbiorcy, w szczególności z powodu niezastosowania się przez Nadawcę lub Odbiorcę do postanowień niniejszego Regulaminu, nie wywołanych winą firmy Solidfach Michał Wasiluk albo wskutek siły wyższej. Pod pojęciem siły wyższej należy rozumieć m.in. wszelkie katastrofy i kataklizmy, strajki, blokady dróg, lub inne nieprzewidziane, niezależne od firmy Solidfach Michał Wasiluk zdarzenia.</li>
                <li>Solidfach Michał Wasiluk nie ponosi ponadto odpowiedzialności za opóźnienie w dostarczeniu Przesyłki lub zwrotu Przesyłki jeśli:
                <ol type="a">
                <li>Przesyłka została źle zaadresowana (nie podano lub popełniono błąd w nazwisku, nazwie firmy, ulicy, numerze, miejscowości lub kodzie pocztowym Odbiorcy).</li>
                <li>Odbiorca zmienił miejsce zamieszkania lub siedzibę.</li>
                <li>Zawartość faktyczna Przesyłki nie zgadza się z zawartością deklarowaną na Liście Przewozowym.</li>
                <li>Waga Przesyłki nie zgadza się z wagą deklarowaną na Liście Przewozowym.</li>
                </ol>
                </li>
                    <li>Solidfach Michał Wasiluk nie ponosi odpowiedzialności za szkody pośrednie i utracone korzyści wynikłe na skutek niewykonania lub nienależytego wykonania usługi, zarówno w stosunku do Odbiorcy, Nadawcy jak i osób trzecich.</li>
                    <li>W razie, gdy do wypłaty odszkodowania zobowiązana jest instytucja ubezpieczeniowa, Solidfach Michał Wasiluk nie ponosi odpowiedzialności, o której mowa w niniejszym paragrafie.</li>
                    <li>Odpowiedzialność firmy Solidfach Michał Wasiluk za pobrane od Odbiorcy środki pieniężne rozpoczyna się z chwilą potwierdzenia przez Solidfach Michał Wasiluk ich pobrania i jest ograniczona do wysokości pobranej kwoty.</li>
                    <li>Dochodzenie roszczeń w postępowaniu sądowym przysługuje uprawnionemu po bezskutecznym wyczerpaniu drogi reklamacyjnej.</li>
                </ol>
                </li>
                </ol>
                </div>
            </Container>
        </>
    );
}

export default RegulaminView;