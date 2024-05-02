import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
declare var tinymce: any;

@Injectable({
    providedIn: "root",
})

export class CoreHelper {

    createUrl(actionName: string): string {
        return `${environment.API_BASE_URL}${actionName}`;
    }

    tinymceConfig() {
        // tinymce.baseURL = '/assets';
        let css = [
          "/assets/skins/content/default/content.min.css",
        ];
       
        return {
          menubar: false,
          paste_as_text: true,
          verify_html: false,
          theme: "silver",
          button_tile_map: true,
          content_css: css,
          plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions  tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          image_advtab: true,
        };
      }

}