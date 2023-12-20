import React, { useEffect } from 'react';
import grapesjs from 'grapesjs';
import gjsForms from 'grapesjs-plugin-forms';
import gjsNavbar from 'grapesjs-navbar';
import gjsBlocksBasic from 'grapesjs-blocks-basic';
import html2pdf from 'html2pdf.js';

function EditForm() {
    useEffect(() => {
      const editor = grapesjs.init({
        container: '#editor',
        plugins: [gjsForms, gjsNavbar, gjsBlocksBasic],
        pluginsOpts: {
            [gjsForms]: {},
            [gjsNavbar]: {
                options: {
                  buildProps: ['float', 'width', 'margin', 'background-color'],
                },
            },
            [gjsBlocksBasic]: {
                blocks: ['text', 'link', 'image', 'video'],
            },
        },
        });
        editor.I18n.addMessages({
            en: {
                blockManager: {
                    labels: {
                        form: 'EN Form',
                        input: 'EN Input',
                        textarea: 'EN Textarea',
                        select: 'EN Select',
                        checkbox: 'EN Checkbox',
                        radio: 'EN Radio',
                        button: 'EN Button',
                        label: 'EN Label',
                    },
                    categories: {
                        forms: 'EN Forms',
                    }
                },
                domComponents: {
                    names: {
                        form: 'EN Form',
                        input: 'EN Input',
                        textarea: 'EN Textarea',
                        select: 'EN Select',
                        checkbox: 'EN Checkbox',
                        radio: 'EN Radio',
                        button: 'EN Button',
                        label: 'EN Label',
                    },
                },
                traitManager: {
                    traits: {
                        labels: {
                            method: 'EN Method',
                            action: 'EN Action',
                            name: 'EN Name',
                            placeholder: 'EN Placeholder',
                            type: 'EN Type',
                            required: 'EN Required',
                            options: 'EN Options',
                            id: 'EN Id',
                            for: 'EN For',
                            value: 'EN Value',
                            checked: 'EN Checked',
                            text: 'EN Text',
                        },
                        options: {
                            type: {
                                text: 'EN Text',
                                email: 'EN Email',
                                password: 'EN Password',
                                number: 'EN Number',
                                submit: 'EN Submit',
                                reset: 'EN Reset',
                                button: 'EN Button',
                            }
                        }
                    },
                },
            }
        });

        editor.Panels.addButton('options', {
            id: 'save-form-button',
            className: 'fa fa-save',
            command: 'save-form',
            attributes: { title: 'Save Form' },
            active: false,
        });

        editor.Panels.addButton('options', {
            id: 'export-pdf-button',
            className: 'fa fa-file-pdf-o',
            command: 'export-pdf',
            attributes: { title: 'Export PDF' },
            active: false,
        });

        editor.Panels.addButton('options', {
            id: 'publish-form-button',
            className: 'fa fa-upload',
            command: 'publish-form',
            attributes: { title: 'Publish Form' },
            active: false,
        });

        

        editor.Commands.add('save-form', {
            run: (editor, sender, opts) => {
                saveFormToAPI(editor);
            },
        });

        editor.Commands.add('export-pdf', {
            run: (editor, sender, opts) => {
                exportFormAsPDF(editor);
            },
        });

        editor.Commands.add('publish-form', {
            run: (editor, sender, opts) => {
                publishForm(editor);
            },
        });



        

        const saveFormToAPI = async () => {
            try {
                const htmlContent = editor.getHtml();

                const responseSave = await fetch('http://localhost:3002/api/savePage', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ htmlContent }),
                });

                if (!responseSave.ok) {
                    throw new Error(`Failed to save form data. Server responded with ${responseSave.status}: ${await responseSave.text()}`);
                }

                const dataSave = await responseSave.json();
                console.log(dataSave);

                alert(`Form saved successfully!\nYou can view it here: ${dataSave.link}`);
            } catch (error) {
                console.error('Error during saveFormToAPI', error);
                alert('Error during form save. Please try again.');
            }
        };

        const exportFormAsPDF = () => {
            try {
                const savedFormContent = editor.getHtml();
                html2pdf(savedFormContent, {
                    margin: 10,
                    filename: 'exported_form.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                });
            } catch (error) {
                console.error('Error during exportFormAsPDF', error);
                alert('Error during PDF export. Please try again.');
            }
        };

        const publishForm = async () => {
            try {
                const htmlContent = editor.getHtml();
                const responsePublish = await fetch('http://localhost:3002/api/publishPage', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ htmlContent }),
                });

                if (!responsePublish.ok) {
                    throw new Error(`Failed to publish form. Server responded with ${responsePublish.status}: ${await responsePublish.text()}`);
                }

                const dataPublish = await responsePublish.json();
                console.log(dataPublish);

                alert(`Form published successfully!\nYou can view it here: ${dataPublish.link}`);
            } catch (error) {
                console.error('Error during publishForm', error);
                alert('Error during form publication. Please try again.');
            }
        };

        
      
      


          editor.on('component:selected', () => {
            const saveButton = document.getElementById('save-form-button');
            const exportPDFButton = document.getElementById('export-pdf-button');
            const publishButton = document.getElementById('publish-form-button');
        
            if (saveButton) {
                saveButton.addEventListener('click', () => {
                    saveFormToAPI();
                });
            }
        
            if (exportPDFButton) {
                exportPDFButton.addEventListener('click', () => {
                    exportFormAsPDF();
                });
            }
        
            if (publishButton) {
                publishButton.addEventListener('click', () => {
                    publishForm();
                });
            }
        
        });
    
        return () => {
            editor.destroy();
        };

        
    }, []);

    

    return (
        <div className="Form">
            <div id="editor"></div>

        </div>
    );
}

export default EditForm;