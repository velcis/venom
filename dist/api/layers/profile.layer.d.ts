import { Page } from 'puppeteer';
import { HostLayer } from './host.layer';
import { CreateConfig } from '../../config/create-config';
export declare class ProfileLayer extends HostLayer {
    page: Page;
    constructor(page: Page, session?: string, options?: CreateConfig);
    /**
     * @param contactsId Example: 0000@c.us | [000@c.us, 1111@c.us]
     * @param time duration of silence
     * @param type kind of silence "hours" "minutes" "year"
     * To remove the silence, just enter the contact parameter
     */
    sendMute(id: string, time: number, type: string): Promise<object>;
    /**
     * Change the theme
     * @param string types "dark" or "light"
     */
    setTheme(type: string): Promise<boolean>;
    /**
     * Sets current user profile status
     * @param status
     */
    setProfileStatus(status: string): Promise<number>;
    /**
     * Sets the user's current profile photo
     * @param name
     */
    setProfilePic(path: string, to?: string): Promise<boolean>;
    /**
     * Sets current user profile name
     * @param name
     */
    setProfileName(name: string): Promise<number>;
}
