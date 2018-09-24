import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { DressingTablesComponent } from './bedroom/dressing-tables/dressing-tables.component';
import { MattressesComponent } from './bedroom/mattresses/mattresses.component';
import { BedsideTablesComponent } from './bedroom/bedside-tables/bedside-tables.component';
import { KingSizeComponent } from './bedroom/beds/king-size/king-size.component';
import { QueenSizeComponent } from './bedroom/beds/queen-size/queen-size.component';
import { DoubleSizeComponent } from './bedroom/beds/double-size/double-size.component';
import { SingleSizeComponent } from './bedroom/beds/single-size/single-size.component';
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
import { DressingWithMirrorComponent } from './bedroom/dressing-tables/dressing-with-mirror/dressing-with-mirror.component';
import { ModernCornerComponent } from './bedroom/dressing-tables/modern-corner/modern-corner.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'Signin',component:SigninComponent},
  {path: 'helpme',component:HelpmeComponent},
  {path: 'createaccount',component:CreateAccountComponent},
  {path: 'terms',component:TermsComponent},
  {path: 'office-desks',component:OfficeDesksComponent},
  {path: 'living',component:LivingComponent},
  {path: 'kitchen',component:KitchenComponent},
  {path: 'bedroom',component:BedroomComponent},
  {path: 'beds',component:BedsComponent},
  {path: 'dressing',component:DressingTablesComponent},
  {path: 'mattresses',component:MattressesComponent},
  {path: 'bedside',component:BedsideTablesComponent},
  {path: 'kingSize',component:KingSizeComponent},
  {path: 'queenSize',component:QueenSizeComponent},
  {path: 'doubleSize',component:DoubleSizeComponent},
  {path: 'singleSize',component:SingleSizeComponent},
  {path: 'canopy',component:BlackFrameCanopyComponent},
  {path: 'king',component:KingComponent},
  {path: 'queen',component:QueenComponent},
  {path: 'single',component:SingleComponent},
  {path: 'double',component:DoubleComponent},
  {path: 'foam',component:FoamComponent},
  {path: 'coir',component:CoirComponent},
  {path: 'cotton',component:CottonComponent},
  {path: 'spring',component:SpringComponent},
  {path: 'foam-matt1',component:FoamMatt1Component},
  {path: 'aboutUs',component:AboutUsComponent},
  {path: 'westwood',component:WestwoodComponent},
  {path: 'modernist',component:ModernistComponent},
  {path: 'twoOfficeDesk',component:TwoOfficeDeskComponent},
  {path: 'sofasAndCouches',component:SofasAndCouchesComponent},
  {path: 'tables',component:TablesComponent},
  {path: 'shelves',component:ShelvesComponent},
  {path: 'tvUnits',component:TvUnitsComponent},
  {path: 'borghese',component:BorgheseSofaComponent},
  {path: 'parsonsGray',component:ParsonsGrayComponent},
  {path: 'bookcase',component:BookCaseWoodComponent},
  {path: 'Haruto',component:HarutoComponent},
  {path: 'wooden-dining',component:WoodenDiningTableComponent},
  {path: 'cart',component:CartComponent},
  {path: 'collection1',component:BedroomCollectionComponent},
  {path: 'home-desk',component:HomeOfficeDeskComponent},
  {path: 'flowy',component:FlowyOfficeDeskComponent},
  {path: 'sudan',component:SudanOfficeDeskComponent},
  {path: 'toufted',component:TouftedSofaComponent},
  {path: 'love-seat',component:LoveSeatComponent},
  {path: 'lshape-sofa',component:LShapeSofaComponent},
  {path: 'parsonsWhite',component:ParsonsWhiteComponent},
  {path: 'lab-table',component:LabCertifiedTableComponent},
  {path: 'square-table',component:SquareCoffeeTableComponent},
  {path: 'accent-shelf',component:AccentShelfComponent},
  {path: 'floating-shelf',component:FloatingShelfComponent},
  {path: '6-pack-wall',component:WallShelvesComponent},
  {path: 'keerthi',component:KeerthiComponent},
  {path: 'white-floating-tv',component:WhiteFloatingTvComponent},
  {path: 'wooden-wall-unit',component:WoodenWallUnitComponent},
  {path: 'dining-kitchen',component:DiningKitchenTableComponent},
  {path: 'kitchen-cabinets',component:KitchenCabinetsComponent},
  {path: 'cyprus-serving',component:CyprusServingTrolleyComponent},
  {path: 'modern-leather',component:ModernLeatherComponent},
  {path: 'light-modern',component:LightModernComponent},
  {path: 'faux-leather',component:FauxLeatherComponent},
  {path: 'yuko',component:YukoComponent},
  {path: 'snoze',component:SnozeTallComponent},
  {path: 'ledelle',component:LedelleComponent},
  {path: 'cherry',component:CherryComponent},
  {path: 'modern-corner',component:ModernCornerComponent},
  {path: 'dressing-with-mirror',component:DressingWithMirrorComponent},
  {path: '**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
