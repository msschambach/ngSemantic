import { SemanticMenuComponent } from "./ng-semantic/menu/menu";
import { SemanticMessageComponent } from "./ng-semantic/message/message";
import { SMTooltipDirective } from "./ng-semantic/popup/tooltip";
import { SemanticPopupComponent } from "./ng-semantic/popup/popup";
import { SemanticModalComponent } from "./ng-semantic/modal/modal";
import { SemanticSegmentComponent } from "./ng-semantic/segment/segment";
import { SemanticListComponent } from "./ng-semantic/list/list";
import { SemanticButtonComponent } from "./ng-semantic/button/button";
import { SemanticItemComponent } from "./ng-semantic/item/item";
import { SMVisibilityDirective } from "./ng-semantic/visibility/visibility";
import { SemanticDropdownComponent } from "./ng-semantic/dropdown/dropdown";
import { SemanticSelectComponent } from "./ng-semantic/select/select";
import { SemanticSearchComponent } from "./ng-semantic/search/search";
import { SemanticLoaderComponent } from "./ng-semantic/loader/loader";
import { SemanticCardComponent, SemanticCardsComponent } from "./ng-semantic/card/card";
import { SemanticInputComponent, SemanticTextareaComponent, SemanticCheckboxComponent } from "./ng-semantic/input/input";
import { SemanticSidebarComponent } from "./ng-semantic/sidebar/sidebar";
import { SemanticTabsComponent, SemanticTabComponent } from "./ng-semantic/tab/tab";
import { SemanticFlagComponent } from "./ng-semantic/flag/flag";
import { SemanticContextMenuComponent } from "./ng-semantic/contextmenu/contextmenu";
import { SemanticProgressComponent } from "./ng-semantic/progress/progress";
import { SemanticDimmerComponent } from "./ng-semantic/dimmer/dimmer";
import { SemanticAccordionComponent, SemanticAccordionItemComponent } from "./ng-semantic/accordion/accordion";
import { SemanticRatingComponent } from "./ng-semantic/rating/rating";

export * from "./ng-semantic/menu/menu";
export * from "./ng-semantic/contextmenu/contextmenu";
export *  from "./ng-semantic/message/message";
export * from "./ng-semantic/popup/tooltip";
export *  from "./ng-semantic/popup/popup";
export *  from "./ng-semantic/visibility/visibility";
export *  from "./ng-semantic/modal/modal";
export *  from "./ng-semantic/segment/segment";
export *  from "./ng-semantic/rating/rating";
export *  from "./ng-semantic/list/list";
export *  from "./ng-semantic/button/button";
export *  from "./ng-semantic/search/search";
export *  from "./ng-semantic/item/item";
export *  from "./ng-semantic/dropdown/dropdown";
export *  from "./ng-semantic/select/select";
export *  from "./ng-semantic/loader/loader";
export *  from "./ng-semantic/card/card";
export *  from "./ng-semantic/input/input";
export *  from "./ng-semantic/sidebar/sidebar";
export *  from "./ng-semantic/tab/tab";
export *  from "./ng-semantic/flag/flag";
export *  from "./ng-semantic/progress/progress";
export *  from "./ng-semantic/dimmer/dimmer";
export *  from "./ng-semantic/accordion/accordion";

export let SEMANTIC_COMPONENTS: Array<any> = [
	SemanticCardComponent,
	SemanticCardsComponent,
	SemanticContextMenuComponent,
	SemanticInputComponent,
	SemanticTextareaComponent,
	SemanticCheckboxComponent,
	SemanticMenuComponent,
	SemanticMessageComponent,
	SemanticSegmentComponent,
	SemanticDimmerComponent,
	SemanticPopupComponent,
	SemanticDropdownComponent,
	SemanticListComponent,
	SemanticSelectComponent,
	SemanticFlagComponent,
	SemanticSearchComponent,
	SMVisibilityDirective,
	SemanticItemComponent,
	SemanticSidebarComponent,
	SemanticProgressComponent,
	SemanticModalComponent,
	SemanticTabsComponent,
	SemanticTabComponent,
	SemanticButtonComponent,
	SemanticLoaderComponent,
	SemanticAccordionComponent,
	SemanticAccordionItemComponent,
	SemanticRatingComponent
];

export let SEMANTIC_DIRECTIVES: Array<any> = [
	SMTooltipDirective
];
