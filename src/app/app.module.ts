import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { HelpmeComponent } from './signin/helpme/helpme.component';
import { CreateAccountComponent } from './signin/create-account/create-account.component';
import { TermsComponent } from './signin/create-account/terms/terms.component';
import { OfficeDesksComponent } from './office-desks/office-desks.component';
import { LivingComponent } from './living/living.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { BedsComponent } from './bedroom/beds/beds.component';
import { MattressesComponent } from './bedroom/mattresses/mattresses.component';
import { BedsideTablesComponent } from './bedroom/bedside-tables/bedside-tables.component';
import { DressingTablesComponent } from './bedroom/dressing-tables/dressing-tables.component';
import { SingleSizeComponent } from './bedroom/beds/single-size/single-size.component';
import { DoubleSizeComponent } from './bedroom/beds/double-size/double-size.component';
import { KingSizeComponent } from './bedroom/beds/king-size/king-size.component';
import { QueenSizeComponent } from './bedroom/beds/queen-size/queen-size.component';
import { BlackFrameCanopyComponent } from './bedroom/beds/black-frame-canopy/black-frame-canopy.component';
import { KingComponent } from './bedroom/mattresses/king/king.component';
import { QueenComponent } from './bedroom/mattresses/queen/queen.component';
import { SingleComponent } from './bedroom/mattresses/single/single.component';
import { DoubleComponent } from './bedroom/mattresses/double/double.component';
import { FoamComponent } from './bedroom/mattresses/foam/foam.component';
import { CoirComponent } from './bedroom/mattresses/coir/coir.component';
import { CottonComponent } from './bedroom/mattresses/cotton/cotton.component';
import { SpringComponent } from './bedroom/mattresses/spring/spring.component';
import { FoamMatt1Component } from './bedroom/mattresses/foam-matt-1/foam-matt-1.component';
import { AboutUsComponent } from './footer/about-us/about-us.component';
import { WestwoodComponent } from './bedroom/dressing-tables/westwood/westwood.component';
import { ModernistComponent } from './bedroom/bedside-tables/modernist/modernist.component';
import { TwoOfficeDeskComponent } from './office-desks/two-office-desk/two-office-desk.component';
import { SofasAndCouchesComponent } from './living/sofas-and-couches/sofas-and-couches.component';
import { TablesComponent } from './living/tables/tables.component';
import { ShelvesComponent } from './living/shelves/shelves.component';
import { TvUnitsComponent } from './living/tv-units/tv-units.component';
import { BorgheseSofaComponent } from './living/sofas-and-couches/borghese-sofa/borghese-sofa.component';
import { ParsonsGrayComponent } from './living/tables/parsons-gray/parsons-gray.component';
import { BookCaseWoodComponent } from './living/shelves/book-case-wood/book-case-wood.component';
import { HarutoComponent } from './living/tv-units/haruto/haruto.component';
import { WoodenDiningTableComponent } from './kitchen/wooden-dining-table/wooden-dining-table.component';
import { CartComponent } from './cart/cart.component';
import { BedroomCollectionComponent } from './home/bedroom-collection/bedroom-collection.component';
import { HomeOfficeDeskComponent } from './office-desks/home-office-desk/home-office-desk.component';
import { FlowyOfficeDeskComponent } from './office-desks/flowy-office-desk/flowy-office-desk.component';
import { SudanOfficeDeskComponent } from './office-desks/sudan-office-desk/sudan-office-desk.component';
import { TouftedSofaComponent } from './living/sofas-and-couches/toufted-sofa/toufted-sofa.component';
import { LoveSeatComponent } from './living/sofas-and-couches/love-seat/love-seat.component';
import { LShapeSofaComponent } from './living/sofas-and-couches/l-shape-sofa/l-shape-sofa.component';
import { ParsonsWhiteComponent } from './living/tables/parsons-white/parsons-white.component';
import { LabCertifiedTableComponent } from './living/tables/lab-certified-table/lab-certified-table.component';
import { SquareCoffeeTableComponent } from './living/tables/square-coffee-table/square-coffee-table.component';
import { AccentShelfComponent } from './living/shelves/accent-shelf/accent-shelf.component';
import { FloatingShelfComponent } from './living/shelves/floating-shelf/floating-shelf.component';
import { WallShelvesComponent } from './living/shelves/wall-shelves/wall-shelves.component';
import { KeerthiComponent } from './living/tv-units/keerthi/keerthi.component';
import { WhiteFloatingTvComponent } from './living/tv-units/white-floating-tv/white-floating-tv.component';
import { WoodenWallUnitComponent } from './living/tv-units/wooden-wall-unit/wooden-wall-unit.component';
import { DiningKitchenTableComponent } from './kitchen/dining-kitchen-table/dining-kitchen-table.component';
import { KitchenCabinetsComponent } from './kitchen/kitchen-cabinets/kitchen-cabinets.component';
import { CyprusServingTrolleyComponent } from './kitchen/cyprus-serving-trolley/cyprus-serving-trolley.component';
import { ModernLeatherComponent } from './bedroom/beds/modern-leather/modern-leather.component';
import { LightModernComponent } from './bedroom/beds/light-modern/light-modern.component';
import { FauxLeatherComponent } from './bedroom/beds/faux-leather/faux-leather.component';
import { YukoComponent } from './bedroom/bedside-tables/yuko/yuko.component';
import { SnozeTallComponent } from './bedroom/bedside-tables/snoze-tall/snoze-tall.component';
import { LedelleComponent } from './bedroom/bedside-tables/ledelle/ledelle.component';
import { CherryComponent } from './bedroom/dressing-tables/cherry/cherry.component';
import { ModernCornerComponent } from './bedroom/dressing-tables/modern-corner/modern-corner.component';
import { DressingWithMirrorComponent } from './bedroom/dressing-tables/dressing-with-mirror/dressing-with-mirror.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    SigninComponent,
    HelpmeComponent,
    CreateAccountComponent,
    TermsComponent,
    OfficeDesksComponent,
    LivingComponent,
    KitchenComponent,
    BedroomComponent,
    BedsComponent,
    MattressesComponent,
    BedsideTablesComponent,
    DressingTablesComponent,
    SingleSizeComponent,
    DoubleSizeComponent,
    KingSizeComponent,
    QueenSizeComponent,
    BlackFrameCanopyComponent,
    KingComponent,
    QueenComponent,
    SingleComponent,
    DoubleComponent,
    FoamComponent,
    CoirComponent,
    CottonComponent,
    SpringComponent,
    FoamMatt1Component,
    AboutUsComponent,
    WestwoodComponent,
    ModernistComponent,
    TwoOfficeDeskComponent,
    SofasAndCouchesComponent,
    TablesComponent,
    ShelvesComponent,
    TvUnitsComponent,
    BorgheseSofaComponent,
    ParsonsGrayComponent,
    BookCaseWoodComponent,
    HarutoComponent,
    WoodenDiningTableComponent,
    CartComponent,
    BedroomCollectionComponent,
    HomeOfficeDeskComponent,
    FlowyOfficeDeskComponent,
    SudanOfficeDeskComponent,
    TouftedSofaComponent,
    LoveSeatComponent,
    LShapeSofaComponent,
    ParsonsWhiteComponent,
    LabCertifiedTableComponent,
    SquareCoffeeTableComponent,
    AccentShelfComponent,
    FloatingShelfComponent,
    WallShelvesComponent,
    KeerthiComponent,
    WhiteFloatingTvComponent,
    WoodenWallUnitComponent,
    DiningKitchenTableComponent,
    KitchenCabinetsComponent,
    CyprusServingTrolleyComponent,
    ModernLeatherComponent,
    LightModernComponent,
    FauxLeatherComponent,
    BedsideTablesComponent,
    YukoComponent,
    SnozeTallComponent,
    LedelleComponent,
    CherryComponent,
    ModernCornerComponent,
    DressingWithMirrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
