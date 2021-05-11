import tkinter as tk
import requests
import json
from tkinter import ttk
from tkinter import messagebox
from tkinter import Tk
from tkcalendar import Calendar
from tkinter import *

def PushToTrello(name_card,descript,tema,fecha,Id):
    url = "https://api.trello.com/1/cards"
    headers = {"Accept": "application/json"}
    query = {
       'key': '8cd352560e7ec25fdf45a31c029da515',
       'token': '97af179b08477df8b64cd348752028c0b67abdb0864a769eb49a932c30f99ef3',
       'idList': '60978c0376582635235c7391',
       'name': name_card,
       'desc': descript,
       'due': fecha,
       'idMembers': Id,
        }
    response = requests.request("POST",url,headers=headers,params=query)
    url = "https://api.trello.com/1/lists/60978c0376582635235c7391/cards"
    headers = {"Accept": "application/json"}
    query = {'key': '8cd352560e7ec25fdf45a31c029da515','token': '97af179b08477df8b64cd348752028c0b67abdb0864a769eb49a932c30f99ef3',}
    response = requests.request("GET",url,headers=headers,params=query)
    respuesta=json.dumps(response.json())
    identity=json.loads(respuesta)
    ultima=""
    if (response.status_code==200):
        for i in identity:
            ultima=i['id']
    url = "https://api.trello.com/1/cards/"+ultima+"/actions/comments"
    query = {'key': '8cd352560e7ec25fdf45a31c029da515','token': '97af179b08477df8b64cd348752028c0b67abdb0864a769eb49a932c30f99ef3','text': tema,}
    response = requests.request("POST",url,params=query)
    if (response.status_code==200):
        messagebox.showinfo(title="Info", message="Guardado con éxito")
    else:
        messagebox.showinfo(title="Info", message="Problemas al guardar")
    return 0

root=tk.Tk()
root.title("Ingresar nueva capacitación")
root.geometry("700x220")
Hora=''
Fecha=''
Date=''
Id=''
Claudia='5e80f72d1012b079b580ed07'
Pablo='59e950c83db69d6a025d4175'
David='5ce6209f53e52211289f4bc6'
Felipe='5e8f3d052ae99b69cd3ee63b'

def recibir():
    global Id, Fecha, c
    Iglesia=""
    Pastor=""
    Tema=''
    p1=''
    p2=''
    p3=''
    p4=''
    p5=''
    p6=''
    p7=''
    c1=''
    c2=''
    c3=''
    c4=''
    c5=''
    c6=''
    c7=''
    cal.configure(date_pattern='y-mm-dd')
    Fecha=cal.get_date()
    if (Hora==''):
        messagebox.showinfo(title="Info", message="Debes introducir una fecha.")
        return 0
    if(Hora[0]=='0'):
        diaplus=''
        diaplus=Fecha[-2]+Fecha[-1]
        if (diaplus=='30'):
            mes=''
            mes=Fecha[:-3]
            mes=mes[-2]+mes[-1]
            if (mes=='02' or mes=='04' or mes=='06' or mes=='09' or mes=='11'):
                if(mes=='11'):
                    Fecha=Fecha[:-5]+'12-01'
                elif(mes=='09'):
                    Fecha=Fecha[:-5]+'10-01'
                else:
                    mes=int(mes)
                    mes+=1
                    Fecha=Fecha[:-5]+'0'+str(mes)+'-01'    
            else:
                Fecha=Fecha[:-2]+str(int(diaplus)+1)
        elif (diaplus=='31'):
            mes=''
            mes=Fecha[:-3]
            mes=mes[-2]+mes[-1]
            mes=int(mes)
            mes+=1
            if (mes>9):
                Fecha=Fecha[:-5]+str(mes)+'-01'
            else:
                Fecha=Fecha[:-5]+'0'+str(mes)+'-01'  
        else:
            Fecha=Fecha[:-2]+str(int(diaplus)+1)
    Date=Fecha+'T'+Hora+':00.000Z'
    Iglesia=Enter1.get()
    Pastor=Enter2.get()
    Tema=Enter3.get()
    p1=Enter4.get()
    p2=Enter5.get()
    p3=Enter6.get()
    p4=Enter7.get()
    p5=Enter8.get()
    p6=Enter9.get()
    p7=Enter10.get()
    c1=Enter11.get()
    c2=Enter12.get()
    c3=Enter13.get()
    c4=Enter14.get()
    c5=Enter15.get()
    c6=Enter16.get()
    c7=Enter17.get()
    if (Tema==""):
        messagebox.showinfo(title="Info", message="Debes introducir un tema.")
        return 0
    if (Id==''):
        messagebox.showinfo(title="Info", message="Debes seleccionar a un expositor.")
        return 0
    if (c=="0"):
        messagebox.showinfo(title="Info", message="Debes seleccionar cuantos participarán.")
        return 0
    Enter1.delete(0, 'end')
    Enter2.delete(0, 'end')
    Enter3.delete(0, 'end')
    Enter4.delete(0, 'end')
    Enter5.delete(0, 'end')
    Enter6.delete(0, 'end')
    Enter7.delete(0, 'end')
    Enter8.delete(0, 'end')
    Enter9.delete(0, 'end')
    Enter10.delete(0, 'end')
    Enter11.delete(0, 'end')
    Enter12.delete(0, 'end')
    Enter13.delete(0, 'end')
    Enter14.delete(0, 'end')
    Enter15.delete(0, 'end')
    Enter16.delete(0, 'end')
    Enter17.delete(0, 'end')
    name_card=Iglesia
    descript='Pastor(es): '+Pastor+'\n'
    descript+='Tema a tratar: '+Tema+'\n'
    descript+='Expositor: '+Lista.get()+'\n'
    descript+='Participante 1: '+p1+', correo: '+c1+'\n'
    c=int(c)
    if (c>1):
        descript+='Participante 2: '+p2+', Correo: '+c2+'\n'
    if (c>2):
        descript+='Participante 3: '+p3+', Correo: '+c3+'\n'
    if (c>3):
        descript+='Participante 4: '+p4+', Correo: '+c4+'\n'
    if (c>4):
        descript+='Participante 5: '+p5+', Correo: '+c5+'\n'
    if (c>5):
        descript+='Participante 6: '+p6+', Correo: '+c6+'\n'
    if (c==7):
        descript+='Participante 7: '+p7+', Correo: '+c7+'\n'
    print('Iglesia: '+name_card)
    print(descript)
    cantidad.delete(0, 'end')
    Lista.delete(0, 'end')
    PushToTrello(name_card,descript,Tema,Date,Id)

def seleccionado(a):
    global c, part1, var
    if (c!="0"):
        part1.grid_remove()
        part2.grid_remove()
        part3.grid_remove()
        part4.grid_remove()
        part5.grid_remove()
        part6.grid_remove()
        part7.grid_remove()
        Email1.grid_remove()
        Email2.grid_remove()
        Email3.grid_remove()
        Email4.grid_remove()
        Email5.grid_remove()
        Email6.grid_remove()
        Email7.grid_remove()
        Enter4.grid_remove()
        Enter5.grid_remove()
        Enter6.grid_remove()
        Enter7.grid_remove()
        Enter8.grid_remove()
        Enter9.grid_remove()
        Enter10.grid_remove()
        Enter11.grid_remove()
        Enter12.grid_remove()
        Enter13.grid_remove()
        Enter14.grid_remove()
        Enter15.grid_remove()
        Enter16.grid_remove()
        Enter17.grid_remove()
    c=cantidad.get()
    if (c=="1"):
        var.set("Participante:")
        part1.grid(row=6, column=0, sticky=E)
        Enter4.grid(row=6, column=1)
        boton.grid(row=7, column=1)
        Email1.grid(row=6, column=3)
        Enter11.grid(row=6, column=4)
        root.geometry("700x245")
    if (c=="2"):
        var.set("Participante 1:")
        part1.grid(row=6, column=0, sticky=E)
        Enter4.grid(row=6, column=1)
        part2.grid(row=7, column=0, sticky=E)
        Enter5.grid(row=7, column=1)
        Email1.grid(row=6, column=3)
        Enter11.grid(row=6, column=4)
        Email2.grid(row=7, column=3)
        Enter12.grid(row=7, column=4)
        boton.grid(row=8, column=1)
        root.geometry("700x270")
    if (c=="3"):
        var.set("Participante 1:")
        part1.grid(row=6, column=0, sticky=E)
        Enter4.grid(row=6, column=1)
        part2.grid(row=7, column=0, sticky=E)
        Enter5.grid(row=7, column=1)
        part3.grid(row=8, column=0, sticky=E)
        Enter6.grid(row=8, column=1)
        Email1.grid(row=6, column=3)
        Enter11.grid(row=6, column=4)
        Email2.grid(row=7, column=3)
        Enter12.grid(row=7, column=4)
        Email3.grid(row=8, column=3)
        Enter13.grid(row=8, column=4)
        boton.grid(row=9, column=1)
        root.geometry("700x295")
    if (c=="4"):
        var.set("Participante 1:")
        part1.grid(row=6, column=0, sticky=E)
        Enter4.grid(row=6, column=1)
        part2.grid(row=7, column=0, sticky=E)
        Enter5.grid(row=7, column=1)
        part3.grid(row=8, column=0, sticky=E)
        Enter6.grid(row=8, column=1)
        part4.grid(row=9, column=0, sticky=E)
        Enter7.grid(row=9, column=1)
        Email1.grid(row=6, column=3)
        Enter11.grid(row=6, column=4)
        Email2.grid(row=7, column=3)
        Enter12.grid(row=7, column=4)
        Email3.grid(row=8, column=3)
        Enter13.grid(row=8, column=4)
        Email4.grid(row=9, column=3)
        Enter14.grid(row=9, column=4)
        boton.grid(row=10, column=1)
        root.geometry("700x320")
    if (c=="5"):
        var.set("Participante 1:")
        part1.grid(row=6, column=0, sticky=E)
        Enter4.grid(row=6, column=1)
        part2.grid(row=7, column=0, sticky=E)
        Enter5.grid(row=7, column=1)
        part3.grid(row=8, column=0, sticky=E)
        Enter6.grid(row=8, column=1)
        part4.grid(row=9, column=0, sticky=E)
        Enter7.grid(row=9, column=1)
        part5.grid(row=10, column=0, sticky=E)
        Enter8.grid(row=10, column=1)
        Email1.grid(row=6, column=3)
        Enter11.grid(row=6, column=4)
        Email2.grid(row=7, column=3)
        Enter12.grid(row=7, column=4)
        Email3.grid(row=8, column=3)
        Enter13.grid(row=8, column=4)
        Email4.grid(row=9, column=3)
        Enter14.grid(row=9, column=4)
        Email5.grid(row=10, column=3)
        Enter15.grid(row=10, column=4)
        boton.grid(row=11, column=1)
        root.geometry("700x345")
    if (c=="6"):
        var.set("Participante 1:")
        part1.grid(row=6, column=0, sticky=E)
        Enter4.grid(row=6, column=1)
        part2.grid(row=7, column=0, sticky=E)
        Enter5.grid(row=7, column=1)
        part3.grid(row=8, column=0, sticky=E)
        Enter6.grid(row=8, column=1)
        part4.grid(row=9, column=0, sticky=E)
        Enter7.grid(row=9, column=1)
        part5.grid(row=10, column=0, sticky=E)
        Enter8.grid(row=10, column=1)
        part6.grid(row=11, column=0, sticky=E)
        Enter9.grid(row=11, column=1)
        Email1.grid(row=6, column=3)
        Enter11.grid(row=6, column=4)
        Email2.grid(row=7, column=3)
        Enter12.grid(row=7, column=4)
        Email3.grid(row=8, column=3)
        Enter13.grid(row=8, column=4)
        Email4.grid(row=9, column=3)
        Enter14.grid(row=9, column=4)
        Email5.grid(row=10, column=3)
        Enter15.grid(row=10, column=4)
        Email6.grid(row=11, column=3)
        Enter16.grid(row=11, column=4)
        boton.grid(row=12, column=1)
        root.geometry("700x370")
    if (c=="7"):
        var.set("Participante 1:")
        part1.grid(row=6, column=0, sticky=E)
        Enter4.grid(row=6, column=1)
        part2.grid(row=7, column=0, sticky=E)
        Enter5.grid(row=7, column=1)
        part3.grid(row=8, column=0, sticky=E)
        Enter6.grid(row=8, column=1)
        part4.grid(row=9, column=0, sticky=E)
        Enter7.grid(row=9, column=1)
        part5.grid(row=10, column=0, sticky=E)
        Enter8.grid(row=10, column=1)
        part6.grid(row=11, column=0, sticky=E)
        Enter9.grid(row=11, column=1)
        part7.grid(row=12, column=0, sticky=E)
        Enter10.grid(row=12, column=1)
        Email1.grid(row=6, column=3)
        Enter11.grid(row=6, column=4)
        Email2.grid(row=7, column=3)
        Enter12.grid(row=7, column=4)
        Email3.grid(row=8, column=3)
        Enter13.grid(row=8, column=4)
        Email4.grid(row=9, column=3)
        Enter14.grid(row=9, column=4)
        Email5.grid(row=10, column=3)
        Enter15.grid(row=10, column=4)
        Email6.grid(row=11, column=3)
        Enter16.grid(row=11, column=4)
        Email7.grid(row=12, column=3)
        Enter17.grid(row=12, column=4)
        boton.grid(row=13, column=1)
        root.geometry("700x395")

def DesplegarHora(a):
    global SelectHora
    x, y = root.winfo_pointerx(), root.winfo_pointery()
    position=('{}+{}'.format(x, y))
    win=tk.Tk()
    win.title("ingresar hora")
    win.geometry('350x100+'+position)
    tituloHora=tk.Label(win, text="Ingresa una hora rufián:", font=("Arial", 14))
    tituloHora.pack(padx=5,pady=5,ipadx=5,ipady=5,fill=tk.X)
    SelectHora=ttk.Combobox(win,width=10, justify=tk.RIGHT)
    SelectHora["values"] = ["12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"]
    SelectHora.pack()
    SelectHora.bind("<<ComboboxSelected>>", RecibirHora)
    botonOK=tk.Button(win,text='Fijar', command=win.destroy)
    botonOK.pack(side=tk.TOP)
    win.mainloop()

def RecibirHora(a):
    global Hora
    recibirHora=0
    recibirMinutos=""
    Hora=SelectHora.get()
    recibirHora=int(Hora[0]+Hora[1])
    recibirHora+=4
    recibirMinutos=Hora[2]+Hora[3]+Hora[4]
    if (recibirHora>23):
        recibirHora-=24
        recibirHora='0'+str(recibirHora)
    else:
        recibirHora=str(recibirHora)
    Hora=recibirHora+recibirMinutos

def Expositor(a):
    global Id, Claudia, Pablo, David, Felipe
    if (Lista.get()=="Claudia"):
        Id=Claudia
    if (Lista.get()=="Pablo"):
        Id=Pablo
    if (Lista.get()=="David"):
        Id=David
    if (Lista.get()=="Felipe"):
        Id=Felipe
    return 0
    
c="0"
titulo=tk.Label(text='INGRESAR NUEVA CAPACITACION', font=("Arial", 18))
titulo.grid(row=0, column=0, columnspan=3)
nombre=tk.Label(text='Iglesia:', font=("Cambria", 12))
nombre.grid(row=1, column=0, sticky=E)
Enter1=ttk.Entry(width=40, justify=tk.RIGHT)
Enter1.grid(row=1, column=1)
Pastores=tk.Label(text='Pastor(es):', font=("Cambria", 12))
Pastores.grid(row=2, column=0, sticky=E)
Enter2=ttk.Entry(width=40, justify=tk.RIGHT)
Enter2.grid(row=2, column=1)
respuesta=tk.Label(text='Tema:', font=("Cambria", 12))
respuesta.grid(row=3, column=0, sticky=E)
Enter3=ttk.Entry(width=40, justify=tk.RIGHT)
Enter3.grid(row=3, column=1)
exp=tk.Label(text='Expositor:', font=("Cambria", 12))
exp.grid(row=4, column=0, sticky=E)
Lista=ttk.Combobox(width=37, justify=tk.RIGHT)
Lista["values"] = ["Claudia", "David", "Felipe", "Pablo"]
Lista.grid(row=4, column=1)
Lista.bind("<<ComboboxSelected>>", Expositor)
Participantes=tk.Label(text='Participantes:', font=("Cambria", 12))
Participantes.grid(row=5, column=0, sticky=E)
cantidad=ttk.Combobox(width=37, justify=tk.RIGHT)
cantidad["values"] = ["1", "2", "3", "4", "5", "6", "7"]
cantidad.grid(row=5, column=1)
cantidad.bind("<<ComboboxSelected>>", seleccionado)
var = StringVar()
part1=tk.Label(textvariable=var, font=("Cambria", 12))
part2=tk.Label(text='Participante 2:', font=("Cambria", 12))
part3=tk.Label(text='Participante 3:', font=("Cambria", 12))
part4=tk.Label(text='Participante 4:', font=("Cambria", 12))
part5=tk.Label(text='Participante 5:', font=("Cambria", 12))
part6=tk.Label(text='Participante 6:', font=("Cambria", 12))
part7=tk.Label(text='Participante 7:', font=("Cambria", 12))
Enter4=ttk.Entry(width=40, justify=tk.RIGHT)
Enter5=ttk.Entry(width=40, justify=tk.RIGHT)
Enter6=ttk.Entry(width=40, justify=tk.RIGHT)
Enter7=ttk.Entry(width=40, justify=tk.RIGHT)
Enter8=ttk.Entry(width=40, justify=tk.RIGHT)
Enter9=ttk.Entry(width=40, justify=tk.RIGHT)
Enter10=ttk.Entry(width=40, justify=tk.RIGHT)
Email1=tk.Label(text='Email:', font=("Cambria", 12))
Email2=tk.Label(text='Email:', font=("Cambria", 12))
Email3=tk.Label(text='Email:', font=("Cambria", 12))
Email4=tk.Label(text='Email:', font=("Cambria", 12))
Email5=tk.Label(text='Email:', font=("Cambria", 12))
Email6=tk.Label(text='Email:', font=("Cambria", 12))
Email7=tk.Label(text='Email:', font=("Cambria", 12))
Enter11=ttk.Entry(width=40, justify=tk.RIGHT)
Enter12=ttk.Entry(width=40, justify=tk.RIGHT)
Enter13=ttk.Entry(width=40, justify=tk.RIGHT)
Enter14=ttk.Entry(width=40, justify=tk.RIGHT)
Enter15=ttk.Entry(width=40, justify=tk.RIGHT)
Enter16=ttk.Entry(width=40, justify=tk.RIGHT)
Enter17=ttk.Entry(width=40, justify=tk.RIGHT)
cal=Calendar(selectmode='day', year=2021, mont=6, day=1)
boton=tk.Button(text='Ingresar', command=recibir)
cal.grid(row=0, column=3, rowspan=6, columnspan=2)
cal.bind("<<CalendarSelected>>", DesplegarHora)
boton.grid(row=6, column=1)
SelectHora=ttk.Combobox(width=10, justify=tk.RIGHT)

root.mainloop()
