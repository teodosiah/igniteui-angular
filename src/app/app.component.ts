import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IgxNavigationDrawerComponent, IgxIconService } from 'igniteui-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @ViewChild('navdrawer', { read: IgxNavigationDrawerComponent, static: true })
    navdrawer;

    @HostBinding('attr.id')
    appId = 'igniteui-demo-app';

    drawerState = {
        enableGestures: true,
        open: true,
        pin: false,
        pinThreshold: 768,
        position: 'left',
        width: '300px',
        miniWidth: '80px',
        miniVariant: false
    };

    componentLinks = [
        {
            link: '/autocomplete',
            icon: 'view_list',
            name: 'Autocomplete'
        },
        {
            link: '/avatar',
            icon: 'account_circle',
            name: 'Avatar'
        },
        {
            link: '/badge',
            icon: 'error',
            name: 'Badge'
        },
        {
            link: '/banner',
            icon: 'keyboard_arrow_down',
            name: 'Banner'
        },
        {
            link: '/bottom-navigation',
            icon: 'tab',
            name: 'Bottom Navigation'
        },
        {
            link: '/bottom-navigation-routing',
            icon: 'tab',
            name: 'Bottom Navigation Routing'
        },
        {
            link: '/buttonGroup',
            icon: 'group_work',
            name: 'Button Group'
        },
        {
            link: '/calendar',
            icon: 'event',
            name: 'Calendar'
        },
        {
            link: '/calendar-views',
            icon: 'event',
            name: 'Calendar Views'
        },
        {
            link: '/card',
            icon: 'home',
            name: 'Card'
        },
        {
            link: '/carousel',
            icon: 'view_carousel',
            name: 'Carousel'
        },
        {
            link: '/chip',
            icon: 'android',
            name: 'Chips'
        },
        {
            link: '/combo',
            icon: 'arrow_drop_down_circle',
            name: 'Combo'
        },
        {
            link: '/datePicker',
            icon: 'date_range',
            name: 'DatePicker'
        },
        {
            link: '/dialog',
            icon: 'all_out',
            name: 'Dialog'
        },
        {
            link: '/drag-drop',
            icon: 'view_column',
            name: 'Drag and Drop'
        },
        {
            link: '/dropDown',
            icon: 'view_list',
            name: 'DropDown'
        },
        {
            link: '/virtual-dropdown',
            icon: 'horizontal_split',
            name: 'DropDown - Virtual'
        },
        {
            link: '/dropDown-density',
            icon: 'horizontal_split',
            name: 'DropDown - Density'
        },
        {
            link: '/expansionPanel',
            icon: 'expand_more',
            name: 'ExpansionPanel'
        },
        {
            link: '/inputs',
            icon: 'web',
            name: 'Forms'
        },
        {
            link: '/grid',
            icon: 'view_column',
            name: 'Grid'
        }, {
            link: '/gridMasterDetail',
            icon: 'view_column',
            name: 'Grid Master Detail'
        },
        {
            link: '/gridCellEditing',
            icon: 'view_column',
            name: 'Grid Cell Editing'
        },
        {
            link: '/gridClipboard',
            icon: 'insert_comment',
            name: 'Grid Clipboard Interaction'
        },
        {
            link: '/gridColumnGroups',
            icon: 'view_column',
            name: 'Grid Column Groups'
        },
        {
            link: '/gridMRL',
            icon: 'view_column',
            name: 'Grid MRL'
        },
        {
            link: '/gridMRLConfig',
            icon: 'view_column',
            name: 'Grid MRL Config'
        },
        {
            link: '/gridMRLCustomNav',
            icon: 'view_column',
            name: 'Grid MRL Custom Navigation'
        },
        {
            link: '/gridFilterTemplate',
            icon: 'view_column',
            name: 'Grid Filter Template'
        },
        {
            link: '/gridEsfLoadOnDemand',
            icon: 'view_column',
            name: 'Grid ESF Load On Demand'
        },
        {
            link: '/gridColumnMoving',
            icon: 'view_column',
            name: 'Grid Column Moving'
        },
        {
            link: '/gridColumnPinning',
            icon: 'view_column',
            name: 'Grid Column Pinning'
        },
        {
            link: '/gridColumnResizing',
            icon: 'view_column',
            name: 'Grid Column Resizing'
        },
        {
            link: '/gridConditionalCellStyling',
            icon: 'view_column',
            name: 'Grid Cell Styling'
        },
        {
            link: '/gridGroupBy',
            icon: 'view_column',
            name: 'Grid GroupBy'
        },
        {
            link: '/gridPercentage',
            icon: 'view_column',
            name: 'Grid Percentage'
        },
        {
            link: '/gridAutoSize',
            icon: 'view_column',
            name: 'Grid Auto Size'
        },
        {
            link: '/gridFlex',
            icon: 'view_column',
            name: 'Grid Flex'
        },
        {
            link: '/gridPerformance',
            icon: 'view_column',
            name: 'Grid Performance'
        },
        {
            link: '/gridRemoteVirtualization',
            icon: 'view_column',
            name: 'Grid Remote Virtualization'
        },
        {
            link: '/gridRowEdit',
            icon: 'view_column',
            name: 'Grid Row Editing'
        },
        {
            link: '/gridSelection',
            icon: 'view_column',
            name: 'Grid Selection'
        },
        {
            link: '/gridRowDrag',
            icon: 'view_column',
            name: 'Grid Row Drag'
        },
        {
            link: '/gridSummary',
            icon: 'view_column',
            name: 'Grid Summary'
        },
        {
            link: '/gridToolbar',
            icon: 'view_column',
            name: 'Grid Toolbar'
        },
        {
            link: '/gridToolbarCustom',
            icon: 'view_column',
            name: 'Grid Toolbar Custom Content'
        },
        {
            link: '/gridSearch',
            icon: 'view_column',
            name: 'Grid Search'
        },
        {
            link: '/gridFiltering',
            icon: 'view_column',
            name: 'Grid Filtering'
        },
        {
            link: '/gridExternalFiltering',
            icon: 'view_column',
            name: 'Grid External Filtering'
        },
        {
            link: '/icon',
            icon: 'android',
            name: 'Icon'
        },
        {
            link: '/list',
            icon: 'list',
            name: 'List'
        },
        {
            link: '/listPanning',
            icon: 'list',
            name: 'List Panning'
        },
        {
            link: '/listPerformance',
            icon: 'list',
            name: 'List Performance'
        },
        {
            link: '/navbar',
            icon: 'arrow_back',
            name: 'Navbar'
        },
        {
            link: '/navdrawer',
            icon: 'menu',
            name: 'Navdrawer'
        },
        {
            link: '/overlay',
            icon: 'flip_to_front',
            name: 'Overlay'
        },
        {
            link: '/overlay-animation',
            icon: 'flip_to_front',
            name: 'Overlay Animation'
        },
        {
            link: '/progressbar',
            icon: 'poll',
            name: 'Progress Indicators'
        },
        {
            link: '/radio',
            icon: 'radio_button_checked',
            name: 'Radio Group'
        },
        {
            link: '/select',
            icon: 'arrow_drop_down_circle',
            name: 'Select'
        },
        {
            link: '/slider',
            icon: 'linear_scale',
            name: 'Slider'
        },
        {
            link: '/snackbar',
            icon: 'feedback',
            name: 'Snackbar'
        },
        {
            link: '/tabs',
            icon: 'tab',
            name: 'Tabs'
        },
        {
            link: '/tabs-routing',
            icon: 'tab',
            name: 'Tabs Routing'
        },
        {
            link: '/timePicker',
            icon: 'date_range',
            name: 'TimePicker'
        },
        {
            link: '/toast',
            icon: 'android',
            name: 'Toast'
        }, {
            link: '/hierarchicalGrid',
            icon: 'view_column',
            name: 'Hierarchical Grid'
        }, {
            link: '/hierarchicalGridRemote',
            icon: 'swap_vert',
            name: 'Hierarchical Grid Remote'
        }, {
            link: '/hierarchicalGridUpdating',
            icon: 'edit',
            name: 'Hierarchical Grid Updating'
        },
        {
            link: '/treeGrid',
            icon: 'view_column',
            name: 'Tree Grid'
        },
        {
            link: '/treeGridFlatData',
            icon: 'view_column',
            name: 'Tree Grid Flat Data'
        },
        {
            link: '/treeGridLoadOnDemand',
            icon: 'view_column',
            name: 'Tree Grid Load On Demand'
        }
    ].sort((componentLink1, componentLink2) => componentLink1.name > componentLink2.name ? 1 : -1);

    directiveLinks = [
        {
            link: '/buttons',
            icon: 'radio_button_unchecked',
            name: 'Buttons'
        },
        {
            link: '/input-group',
            icon: 'web',
            name: 'Input Group'
        },
        {
            link: '/layout',
            icon: 'view_quilt',
            name: 'Layout'
        },
        {
            link: '/mask',
            icon: 'view_column',
            name: 'Mask Directive'
        },
        {
            link: '/ripple',
            icon: 'wifi_tethering',
            name: 'Ripple'
        },
        {
            link: '/tooltip',
            icon: 'info',
            name: 'Tooltip'
        },
        {
            link: '/virtualForDirective',
            icon: 'view_column',
            name: 'Virtual-For Directive'
        }
    ].sort((componentLink1, componentLink2) => componentLink1.name > componentLink2.name ? 1 : -1);

    styleLinks = [
        {
            link: '/colors',
            icon: 'color_lens',
            name: 'Colors'
        },
        {
            link: '/shadows',
            icon: 'layers',
            name: 'Shadows'
        },
        {
            link: '/typography',
            icon: 'font_download',
            name: 'Typography'
        }
    ].sort((componentLink1, componentLink2) => componentLink1.name > componentLink2.name ? 1 : -1);

    constructor(private router: Router, private iconService: IgxIconService) {
        iconService.registerFontSetAlias('fa-solid', 'fa');
        iconService.registerFontSetAlias('fa-brands', 'fab');
    }

    ngOnInit() {
        this.router.events.pipe(
            filter(x => x instanceof NavigationStart)
        )
            .subscribe((event: NavigationStart) => {
                if (event.url !== '/' && !this.navdrawer.pin) {
                    this.navdrawer.close();
                }
            });

        // register custom SVG icons
        this.iconService.addSvgIcon('rain', '../assets/images/card/icons/rain.svg', 'weather-icons');
        this.iconService.addSvgIcon('breeze', '../assets/images/card/icons/breeze.svg', 'weather-icons');

    }
}
